import prisma from "@/lib/prisma";
import { connectWhatsApp, sendMessage } from "@/lib/whatsappClient";
import { NextResponse } from "next/server";

export async function GET() {
  await connectWhatsApp();
  return NextResponse.json({ ok: true, connected: true });
}

function normalizePhone(raw) {
  let p = raw.trim();
  if (p.startsWith("+")) p = p.slice(1);
  if (p.startsWith("0")) p = "92" + p.slice(1);
  return p;
}

export async function POST() {
  try {
    await connectWhatsApp();

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    // 1) Pick ONE lead only:
    // Prefer leads that were NEVER sent (lastWhatsappSentAt = null).
    // If none, pick the one with the oldest lastWhatsappSentAt (< 7 days ago condition).
    const lead =
      (await prisma.lead.findFirst({
        where: {
          reviewdone: false,
        },
        orderBy: { id: "asc" }, // tie-breaker
      })) ??
      (await prisma.lead.findFirst({
        where: {
          reviewdone: false,
        },
        orderBy: { lastWhatsappSentAt: "asc" }, // oldest timestamp first
      }));

    if (!lead) {
      return NextResponse.json(
        { ok: true, message: "No eligible lead found (7-day rule)." },
        { status: 200 }
      );
    }

    if (!lead.phone || !lead.phone.trim()) {
      return NextResponse.json(
        { ok: false, error: "Selected lead has no phone." },
        { status: 400 }
      );
    }

    const phone = normalizePhone(lead.phone);

    console.log(phone);
    

    // 2) Build message (first vs follow-up)
    const text = !lead.sent
      ? `Hi ${lead.name ?? ""}, please leave a review: https://example.com/review/${lead.id}`
      : `Hi ${lead.name ?? ""}, reminder: please leave a review: https://example.com/review/${lead.id}`;

    // 3) Send
    // await sendMessage(phone, text);
    await sendMessage(923098113300, text);

    // 4) Update timestamps
    const now = new Date();
    // await prisma.lead.update({
    //   where: { id: lead.id },
    //   data: {
    //     sent: true,
    //     sentAt: lead.sentAt ?? now, // keep first-ever timestamp if you want
    //     lastWhatsappSentAt: now,     // always update last sent
    //   },
    // });

    return NextResponse.json({
      ok: true,
      message: "Message sent to one lead.",
      lead: {
        id: lead.id,
        phone: lead.phone,
        lastWhatsappSentAt: now,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}