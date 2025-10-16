import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import axios from "axios";

const WHATSAPP_API_URL = "https://graph.facebook.com/v20.0";
const PHONE_NUMBER_ID = 817185778144457; // from your Meta App
const ACCESS_TOKEN = "EAATCd12aucIBPk6igTSGaZApkwodZCpPOUgex8Rr7XkElCh4tO9IxQUb87ClJoGRWxvQgRATUweSHuUG6ZCjQDOZCcxt3RYwJ7rYNEWWLs2MI8PnZCLi5stVERTf6nbufabGCEgcPFVBAZC4Az9jH90YGZAwmNl9PjGjDuDGezStAjdS2sqbJp49myOkJnUj00EcENMlbfMeEO0ZBZBB23YNv8it974jUY8enOg1znNcfQY85pZAnSclZBRc6YApyuC3gZDZD"; // from your Meta App

export async function GET() {
  try {
    const now = new Date();

    // 1️⃣ Fetch pending reminders
    const reminders = await prisma.reminder.findMany({
      where: {
        isDone: false,
        remindAt: { lte: now },
      },
      include: { user: true },
    });

    if (reminders.length === 0) {
      return NextResponse.json(
        { message: "No pending reminders right now." },
        { status: 200 }
      );
    }

    // 2️⃣ Loop through each reminder
    for (const reminder of reminders) {
      const { user, message, id } = reminder;

      if (!user?.phone) {
        console.warn(`Skipping reminder ${id}: user has no phone.`);
        continue;
      }

      // 3️⃣ Convert phone number: remove first digit and add 92
      let formattedPhone = user.phone.trim();
      if (formattedPhone.startsWith("0")) {
        formattedPhone = "92" + formattedPhone.slice(1);
      } else if (!formattedPhone.startsWith("92")) {
        formattedPhone = "92" + formattedPhone;
      }

      try {
        // 4️⃣ Send WhatsApp Template Message
        await axios.post(
          `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
          {
            messaging_product: "whatsapp",
            to: formattedPhone,
            type: "template",
            template: {
              name: "hello_world", // ✅ must exist in your WhatsApp templates
              language: { code: "en_US" },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        console.log(`✅ Reminder sent to ${user.name} (${formattedPhone})`);
      } catch (error) {
        console.error(
          `❌ Failed to send reminder ${id}:`,
          error.response?.data || error.message
        );
      }
    }

    return NextResponse.json(
      { message: "Processed all pending reminders." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending reminders:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending reminders." },
      { status: 500 }
    );
  }
}