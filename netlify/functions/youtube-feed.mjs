/**
 * youtube-feed — מושך סרטונים מערוץ YouTube @financeinst דרך RSS
 * GET /.netlify/functions/youtube-feed?limit=20
 */

const CHANNEL_HANDLE = "financeinst";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
};

function unesc(s) {
  return (s || "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .trim();
}

/** מנסה לחלץ channel_id מ-HTML של עמוד הערוץ בארבע דרכים */
function extractChannelId(html) {
  const patterns = [
    // RSS link tag בתוך ה-<head>
    /feeds\/videos\.xml\?channel_id=(UC[A-Za-z0-9_-]{20,})/,
    // externalId ב-JSON הפנימי
    /"externalId":"(UC[A-Za-z0-9_-]{20,})"/,
    // browseId ב-JSON הפנימי
    /"browseId":"(UC[A-Za-z0-9_-]{20,})"/,
    // channelId ב-JSON הפנימי
    /"channelId":"(UC[A-Za-z0-9_-]{20,})"/,
    // canonical href
    /youtube\.com\/channel\/(UC[A-Za-z0-9_-]{20,})/,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1];
  }
  return null;
}

/** מפרסר RSS XML ומחזיר מערך items */
function parseRSS(rss) {
  const items = [];
  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let m;
  while ((m = entryRe.exec(rss)) !== null) {
    const e = m[1];
    const videoIdM = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleM   = e.match(/<title>([^<]*)<\/title>/);
    const pubM     = e.match(/<published>([^<]+)<\/published>/);
    const thumbM   = e.match(/<media:thumbnail[^>]+url="([^"]+)"/);
    const descM    = e.match(/<media:description>([\s\S]*?)<\/media:description>/);
    if (!videoIdM || !titleM) continue;
    const videoId = videoIdM[1].trim();
    items.push({
      videoId,
      title:   unesc(titleM[1]),
      text:    unesc((descM ? descM[1] : "").slice(0, 400)),
      url:     `https://www.youtube.com/watch?v=${videoId}`,
      image:   thumbM ? thumbM[1] : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      dateISO: pubM ? pubM[1].trim() : null,
      site:    "פיננסים YouTube",
    });
  }
  return items;
}

const FETCH_OPTS = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "he-IL,he;q=0.9,en;q=0.8",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  },
};

export default async function handler(req) {
  if (req.method === "OPTIONS")
    return new Response(null, { status: 204, headers: CORS });

  const limit = Math.min(50, Math.max(1,
    parseInt(new URL(req.url).searchParams.get("limit") || "20")));

  try {
    // שלב 1: מושך את עמוד הערוץ כדי לחלץ channel_id
    const pageResp = await fetch(
      `https://www.youtube.com/@${CHANNEL_HANDLE}`,
      FETCH_OPTS
    );
    if (!pageResp.ok) throw new Error(`Channel page HTTP ${pageResp.status}`);
    const html = await pageResp.text();

    const channelId = extractChannelId(html);
    if (!channelId) throw new Error("Channel ID not found — patterns: " + html.slice(0, 500));

    // שלב 2: מושך RSS
    const rssResp = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { headers: { "User-Agent": FETCH_OPTS.headers["User-Agent"] } }
    );
    if (!rssResp.ok) throw new Error(`RSS HTTP ${rssResp.status}`);
    const rss = await rssResp.text();

    // שלב 3: מפרסר
    const items = parseRSS(rss).slice(0, limit);

    return new Response(JSON.stringify({ items, channelId }), {
      status: 200, headers: CORS,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ items: [], error: String(err.message) }),
      { status: 200, headers: CORS }
    );
  }
}
