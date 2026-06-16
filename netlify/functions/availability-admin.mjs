/**
 * availability-admin — ניהול חלונות הזום הפתוחים. מוגן בסיסמה (ADMIN_PASSWORD).
 *   GET  → מחזיר את החלונות הנוכחיים
 *   POST → שומר רשימת חלונות חדשה  { windows: [{ date:"YYYY-MM-DD", time:"HH:MM" }] }
 * שומר ל-Wasabi: scaleup-availability/open.json
 */

import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const KEY = "scaleup-availability/open.json";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: CORS });

function authed(req) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  const h = req.headers.get("authorization") || "";
  return h === `Bearer ${pw}`;
}

function s3client() {
  return new S3Client({
    region: process.env.WASABI_REGION,
    endpoint: `https://${process.env.WASABI_ENDPOINT}`,
    credentials: {
      accessKeyId: process.env.WASABI_ACCESS_KEY,
      secretAccessKey: process.env.WASABI_SECRET_KEY,
    },
  });
}

export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

  if (!process.env.ADMIN_PASSWORD) return json(503, { error: "admin_not_configured" });
  if (!authed(req)) return json(401, { error: "unauthorized" });
  if (!process.env.WASABI_ACCESS_KEY || !process.env.WASABI_BUCKET) {
    return json(503, { error: "storage_not_configured" });
  }

  const s3 = s3client();

  if (req.method === "GET") {
    try {
      const res = await s3.send(new GetObjectCommand({ Bucket: process.env.WASABI_BUCKET, Key: KEY }));
      const body = await res.Body.transformToString();
      const parsed = JSON.parse(body || "{}");
      return json(200, { windows: Array.isArray(parsed.windows) ? parsed.windows : [] });
    } catch {
      return json(200, { windows: [] });
    }
  }

  if (req.method === "POST") {
    let input;
    try {
      input = JSON.parse((await req.text()) || "{}");
    } catch {
      return json(400, { error: "bad_json" });
    }
    const raw = Array.isArray(input.windows) ? input.windows : [];
    // ניקוי + ולידציה: רק date+time תקינים, ללא כפילויות
    const seen = new Set();
    const windows = [];
    for (const w of raw) {
      const date = String(w?.date || "");
      const time = String(w?.time || "");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) continue;
      const id = `${date} ${time}`;
      if (seen.has(id)) continue;
      seen.add(id);
      windows.push({ date, time });
    }
    windows.sort((a, b) => (`${a.date} ${a.time}`).localeCompare(`${b.date} ${b.time}`));
    try {
      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.WASABI_BUCKET,
          Key: KEY,
          Body: JSON.stringify({ windows, updatedAt: new Date().toISOString() }, null, 2),
          ContentType: "application/json",
        })
      );
      return json(200, { ok: true, windows });
    } catch (e) {
      console.error("availability-admin save error:", e);
      return json(500, { error: "save_failed" });
    }
  }

  return json(405, { error: "method_not_allowed" });
}
