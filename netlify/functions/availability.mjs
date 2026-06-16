/**
 * availability — GET ציבורי. מחזיר את חלונות הזום הפתוחים שהמשרד הגדיר.
 * נקרא מ-Wasabi (scaleup-availability/open.json). סגור כברירת מחדל:
 * אם אין קובץ / אין הגדרת Wasabi — מחזיר רשימה ריקה.
 */

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const KEY = "scaleup-availability/open.json";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

  if (!process.env.WASABI_ACCESS_KEY || !process.env.WASABI_BUCKET) {
    return new Response(JSON.stringify({ windows: [] }), { status: 200, headers: CORS });
  }

  try {
    const s3 = new S3Client({
      region: process.env.WASABI_REGION,
      endpoint: `https://${process.env.WASABI_ENDPOINT}`,
      credentials: {
        accessKeyId: process.env.WASABI_ACCESS_KEY,
        secretAccessKey: process.env.WASABI_SECRET_KEY,
      },
    });
    const res = await s3.send(new GetObjectCommand({ Bucket: process.env.WASABI_BUCKET, Key: KEY }));
    const body = await res.Body.transformToString();
    const parsed = JSON.parse(body || "{}");
    const windows = Array.isArray(parsed.windows) ? parsed.windows : [];
    return new Response(JSON.stringify({ windows }), { status: 200, headers: CORS });
  } catch (e) {
    // קובץ חסר / כל שגיאה → סגור (רשימה ריקה), לא מפילים את הטופס
    return new Response(JSON.stringify({ windows: [] }), { status: 200, headers: CORS });
  }
}
