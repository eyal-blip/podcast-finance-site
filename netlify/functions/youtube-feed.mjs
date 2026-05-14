/**
 * youtube-feed — מושך סרטונים מערוץ YouTube @financeinst דרך RSS
 * GET /.netlify/functions/youtube-feed?limit=20
 */

const CHANNEL_HANDLE = "financeinst";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
};

function unescape(s) {
  return (s || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .trim();
}

export default async function handler(req) {
  if (req.method === "OPTIONS")
    return new Response(null, { status: 204, headers: CORS });

  const limit = Math.min(
    50,
    Math.max(1, parseInt(new URL(req.url).searchParams.get("limit") || "20"))
  );

  try {
    // Step 1: Get channel ID from the handle page
    const pageResp = await fetch(`https://www.youtube.com/@${CHANNEL_HANDLE}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PodcastFinanceBot/1.0)",
        Accept: "text/html",
      },
    });
    if (!pageResp.ok) throw new Error(`Channel page HTTP ${pageResp.status}`);
    const pageHtml = await pageResp.text();

    const cidMatch = pageHtml.match(/"channelId":"(UC[A-Za-z0-9_-]{20,})"/);
    if (!cidMatch) throw new Error("Channel ID not found in page HTML");
    const channelId = cidMatch[1];

    // Step 2: Fetch RSS feed
    const rssResp = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    );
    if (!rssResp.ok) throw new Error(`RSS HTTP ${rssResp.status}`);
    const rss = await rssResp.text();

    // Step 3: Parse entries
    const items = [];
    const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
    let m;
    while ((m = entryRe.exec(rss)) !== null) {
      const e = m[1];

      const videoIdM = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const titleM = e.match(/<title>([^<]*)<\/title>/);
      const publishedM = e.match(/<published>([^<]+)<\/published>/);
      const thumbM = e.match(/<media:thumbnail[^>]+url="([^"]+)"/);
      const descM = e.match(
        /<media:description>([\s\S]*?)<\/media:description>/
      );

      if (!videoIdM || !titleM) continue;

      const videoId = videoIdM[1].trim();
      const title = unescape(titleM[1]);
      const desc = unescape((descM ? descM[1] : "").slice(0, 400));

      items.push({
        videoId,
        title,
        text: desc,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        image:
          thumbM
            ? thumbM[1]
            : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        dateISO: publishedM ? publishedM[1].trim() : null,
        site: "פיננסים YouTube",
      });
    }

    return new Response(
      JSON.stringify({ items: items.slice(0, limit) }),
      { status: 200, headers: CORS }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ items: [], error: String(err.message) }),
      { status: 200, headers: CORS }
    );
  }
}
