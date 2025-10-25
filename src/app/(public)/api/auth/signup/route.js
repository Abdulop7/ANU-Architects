import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

const WHATSAPP_API_URL = "https://graph.facebook.com/v20.0";
const PHONE_NUMBER_ID = 781950855010751; // from your Meta App
const ACCESS_TOKEN = "EAATCd12aucIBP0LNRzFPZBZA2neETW9g5RIDmTw7G5AYV4cmDIINpVX2AlohlT0fwA2TwDfoccK9Da0ADVr4eTKucMS43ZBmPlIiZCIvy48g7yecUbyZAFBZBagyx01yb2ctRTBviT7BgTzIuZAH05hsWlkYb3Ty49LE3Vk4OCOPhPmTs0OI2OYfW60gzu0nOVPW2qwPhVu49tpkqeatDfw5gDsVaL7gaUzJplv7aM9c6l8e5wepfuCQ0UJEgZDZD"; // from your Meta App

export async function POST(req) {
  try {
    const { name, username, password, role, phone, managerId } = await req.json();

    // Check if username already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }


    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password,
        role,
        phone,
        managerId: managerId || null,
      },
    });

    let formattedPhone = phone.trim();
    if (formattedPhone.startsWith("0")) {
      formattedPhone = "92" + formattedPhone.slice(1);
    } else if (!formattedPhone.startsWith("92")) {
      formattedPhone = "92" + formattedPhone;
    }

    await axios.post(
      `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: formattedPhone,
        type: "template",
        template: {
          name: "registration",
          language: { code: "en_US" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name }
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

    console.log(`✅ Message sent to ${name} (${formattedPhone})`);

    return NextResponse.json(
      { message: "User created successfully", user: { id: user.id, username: user.username, role: user.role } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong during signup" },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    const { id, phone } = await req.json();

    // Validate required fields
    if (!id || !phone) {
      return NextResponse.json(
        { error: "User ID and new phone number are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Update user's phone number
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { phone },
    });

    return NextResponse.json(
      {
        message: "Phone number updated successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          username: updatedUser.username,
          phone: updatedUser.phone,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating phone number:", error);
    return NextResponse.json(
      { error: "Something went wrong while updating phone number" },
      { status: 500 }
    );
  }
}