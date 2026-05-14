/**
 * telegram-feed — מושך פוסטים מערוץ הטלגרם הציבורי PodcastFinance
 * GET /.netlify/functions/telegram-feed?limit=20
 */

const CHANNEL = "PodcastFinance";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
};

function ytId(url) {
  const m =
    (url || "").match(/[?&]v=([A-Za-z0-9_-]{11})/) ||
    (url || "").match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function ytThumb(url) {
  const id = ytId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

function stripHtml(html) {
  return (html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/gi, "$2 ($1)")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export default async function handler(req) {
  if (req.method === "OPTIONS")
    return new Response(null, { status: 204, headers: CORS });

  const limit = Math.min(
    50,
    Math.max(1, parseInt(new URL(req.url).searchParams.get("limit") || "20"))
  );

  let html;
  try {
    const resp = await fetch(`https://t.me/s/${CHANNEL}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; NihulhonBot/1.0)",
        Accept: "text/html",
      },
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    html = await resp.text();
  } catch (e) {
    return new Response(
      JSON.stringify({ items: [], error: "fetch_failed" }),
      { status: 200, headers: CORS }
    );
  }

  // --- חילוץ הודעות ---
  const items = [];

  // פיצול לפי כל הודעה (data-post מזהה כל הודעה)
  const msgRe =
    /<div[^>]+class="tgme_widget_message_wrap[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

  let match;
  while ((match = msgRe.exec(html)) !== null) {
    const block = match[0];

    /* תאריך */
    const timeM = block.match(/<time[^>]+datetime="([^"]+)"/);
    if (!timeM) continue;
    const dateISO = timeM[1];

    /* קישור לפוסט בטלגרם */
    const postUrlM = block.match(
      /href="(https:\/\/t\.me\/[A-Za-z0-9_]+\/\d+)"/
    );
    const postUrl = postUrlM ? postUrlM[1] : null;

    /* קישורי YouTube */
    const allHrefs = [...block.matchAll(/href="([^"]+)"/g)].map(
      (m) => m[1]
    );
    const ytUrl = allHrefs.find((u) =>
      /youtube\.com|youtu\.be/i.test(u)
    );

    /* תמונת preview מוטמעת (background-image) */
    const bgM = block.match(/background-image:url\('([^']+)'\)/);
    const previewImg = bgM ? bgM[1] : null;

    /* כותרת מ-link_preview_title */
    const titleM = block.match(
      /<(?:div|span)[^>]*class="link_preview_title[^"]*"[^>]*>([\s\S]*?)<\/(?:div|span)>/
    );
    let title = titleM ? stripHtml(titleM[1]) : "";

    /* תיאור מ-link_preview_description */
    const descM = block.match(
      /<(?:div|span)[^>]*class="link_preview_description[^"]*"[^>]*>([\s\S]*?)<\/(?:div|span)>/
    );
    let desc = descM ? stripHtml(descM[1]) : "";

    /* טקסט ההודעה */
    const textM = block.match(
      /<div[^>]*class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/
    );
    const rawText = textM ? stripHtml(textM[1]) : "";

    /* אם אין כותרת — משתמשים בשורה הראשונה של הטקסט */
    if (!title && rawText) {
      const lines = rawText.split("\n").filter(Boolean);
      title = lines[0]?.slice(0, 120) || "";
      desc = desc || lines.slice(1).join(" ").slice(0, 300);
    }

    /* URL סופי: YouTube קודם, אחר-כך קישור הפוסט */
    const url = ytUrl || postUrl;
    if (!url) continue;

    /* תמונה: YouTube thumbnail קודם, אחר-כך preview */
    const image = ytThumb(ytUrl) || previewImg || null;

    if (!title) continue; // מסנן הודעות ריקות

    items.push({
      title,
      text: desc || rawText.slice(0, 300),
      url,
      image,
      site: "PodcastFinance",
      dateISO,
    });

  }

  /* סידור מהחדש לישן — חייבים לאסוף הכל קודם ואז לחתוך */
  items.reverse();

  return new Response(JSON.stringify({ items }), {
    status: 200,
    headers: CORS,
  });
}
