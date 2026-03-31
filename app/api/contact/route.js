import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: "All fields are required." }),
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "abdulsaboora691@gmail.com",          // ✅ Use env variable
                pass: "ehtf tbcn tbgk qzob", // ✅ App password
            },
        });

        // Send mail
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "info.anuarchitects@gmail.com",
            subject: "New Contact Form Submission",
            text: `
        You received a new message:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
        });


        return new Response(
            JSON.stringify({ success: true, message: "Message sent!" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
    }
}
