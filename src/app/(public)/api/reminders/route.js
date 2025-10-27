import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import axios from "axios";

const WHATSAPP_API_URL = "https://graph.facebook.com/v20.0";
const PHONE_NUMBER_ID = 781950855010751; // from your Meta App
const ACCESS_TOKEN = "EAATCd12aucIBP6AJtN2vO4esFtvUkdoAkHaNzZCkZCN7ZBes1GsG4Y3JlOEkqzADC0IH28Dxd22r8lS1nelMIUl4ZCLX28gDFQHYZApZBg3cqyEVDgHWghuhJuc5hxmNHVKJbA6LFZAxvRXzJxZAQf6rvQ1farDShZCqdxBA7Dbwjfo3LRjMHJvly7ZBe2eNamjAZDZD"; // from your Meta App

export async function POST(req) {
  try {
    const { userId, message, remindAt } = await req.json();

    // Validate required fields
    if (!userId || !message || !remindAt) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { phone: true, name: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


    // Create a new reminder
    const reminder = await prisma.reminder.create({
      data: {
        userId: Number(userId),
        message,
        remindAt: new Date(remindAt),
      },
    });

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
            recipient_type: "individual",
            to: formattedPhone,
            type: "template",
            template: {
              name: "reminder",
              language: { code: "en_US" },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: user.name },
                    { type: "text", text: message },
                  ],
                },
              ],
            }


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
          error.response?.data || error.message
        );
      }


    return NextResponse.json(
      { message: "Reminder created successfully", reminder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating reminder:", error);
    return NextResponse.json(
      { error: "Something went wrong while creating reminder" },
      { status: 500 }
    );
  }
}

// Optional: GET route to fetch reminders
export async function GET() {
  try {
    const reminders = await prisma.reminder.findMany({
      where: { isDone: false },
      orderBy: { remindAt: "asc" },
      include: { user: true },
    });

    return NextResponse.json(reminders, { status: 200 });
  } catch (error) {
    console.error("Error fetching reminders:", error);
    return NextResponse.json(
      { error: "Something went wrong while fetching reminders" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Reminder ID is required" },
        { status: 400 }
      );
    }

    const deletedReminder = await prisma.reminder.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Reminder deleted successfully", deletedReminder },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting reminder:", error);
    return NextResponse.json(
      { error: "Something went wrong while deleting reminder" },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Reminder ID is required" },
        { status: 400 }
      );
    }

    // Update reminder to mark it as completed
    const updatedReminder = await prisma.reminder.update({
      where: { id: Number(id) },
      data: { isDone: true },
    });

    return NextResponse.json(
      { message: "Reminder marked as completed", updatedReminder },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error marking reminder as completed:", error);

    // Handle case where reminder does not exist
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Reminder not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong while updating reminder" },
      { status: 500 }
    );
  }
}
