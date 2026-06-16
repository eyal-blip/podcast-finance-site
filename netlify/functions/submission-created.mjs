/**
 * submission-created — נורה אוטומטית על כל שליחת טופס Netlify Forms.
 * מטפל בטופס "zoom-meeting": שומר את הליד ל-Wasabi (S3) תחת scaleup-zoom/
 * ושולח מייל למשרד דרך Resend עם פרטי הליד וחלון הזמן שנבחר.
 *
 * רדום עד שמוגדרים משתני הסביבה (WASABI_* / RESEND_API_KEY / TO_EMAIL).
 */

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body || "{}");
    const data = payload.payload || {};
    const formName = data.form_name || data.formName || "";

    // מטפלים רק בטופס פגישת הזום
    if (formName !== "zoom-meeting") {
      return { statusCode: 200, body: "ignored" };
    }

    const f = data.data || {};
    const name = f.name || "ללא שם";
    const email = f.email || "";
    const phone = f.phone || "";
    const variant = f.variant || "";
    const savings = f.savings || "";
    const slot = f.slot || "";
    const submittedAt = new Date().toISOString();

    const record = { submittedAt, name, email, phone, variant, savings, slot, source: "scale-up.finance" };

    // --- שמירה ל-Wasabi (אם מוגדר) ---
    if (process.env.WASABI_ACCESS_KEY && process.env.WASABI_BUCKET) {
      try {
        const s3 = new S3Client({
          region: process.env.WASABI_REGION,
          endpoint: `https://${process.env.WASABI_ENDPOINT}`,
          credentials: {
            accessKeyId: process.env.WASABI_ACCESS_KEY,
            secretAccessKey: process.env.WASABI_SECRET_KEY,
          },
        });
        const safeDate = submittedAt.replace(/[:.]/g, "-").slice(0, 19);
        const safeName = name.replace(/[^א-תa-zA-Z0-9]/g, "_").slice(0, 30);
        const key = `scaleup-zoom/${safeDate}_${safeName}.json`;
        await s3.send(
          new PutObjectCommand({
            Bucket: process.env.WASABI_BUCKET,
            Key: key,
            Body: JSON.stringify(record, null, 2),
            ContentType: "application/json",
          })
        );
      } catch (e) {
        console.error("Wasabi store error:", e);
      }
    }

    // --- מייל למשרד דרך Resend (אם מוגדר) ---
    if (process.env.RESEND_API_KEY && process.env.TO_EMAIL) {
      const from = process.env.RESEND_FROM_EMAIL || "scale-up.finance <noreply@nihulhon.com>";
      const html = `
        <div dir="rtl" style="font-family:Arial,Helvetica,sans-serif;color:#1B3A28;max-width:560px;margin:auto">
          <h2 style="color:#1B3A28;border-bottom:2px solid #5A9A72;padding-bottom:8px">פגישה מליד — scale-up.finance</h2>
          ${slot ? `<p style="background:#EAF3EC;padding:12px 16px;border-radius:10px;font-size:16px"><b>חלון הזום שנבחר:</b> ${esc(slot)}</p>` : ""}
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            <tr><td style="padding:6px 0;width:120px;color:#62806A">שם</td><td style="padding:6px 0"><b>${esc(name)}</b></td></tr>
            <tr><td style="padding:6px 0;color:#62806A">טלפון</td><td style="padding:6px 0" dir="ltr">${esc(phone)}</td></tr>
            <tr><td style="padding:6px 0;color:#62806A">אימייל</td><td style="padding:6px 0" dir="ltr">${esc(email)}</td></tr>
            ${savings ? `<tr><td style="padding:6px 0;color:#62806A">עיקר החיסכון</td><td style="padding:6px 0">${esc(savings)}</td></tr>` : ""}
            ${variant ? `<tr><td style="padding:6px 0;color:#62806A">מקור הקמפיין</td><td style="padding:6px 0">${esc(variant)}</td></tr>` : ""}
            <tr><td style="padding:6px 0;color:#62806A">התקבל</td><td style="padding:6px 0">${esc(submittedAt)}</td></tr>
          </table>
        </div>`;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [process.env.TO_EMAIL],
          reply_to: email || undefined,
          subject: `פגישה מליד — ${name}`,
          html,
        }),
      });
      if (!emailRes.ok) console.error("Resend error:", await emailRes.text());
    }

    return { statusCode: 200, body: "ok" };
  } catch (err) {
    console.error("submission-created error:", err);
    return { statusCode: 500, body: err.message };
  }
}
