import { NextResponse } from 'next/server';
import axios from 'axios';
import prisma from '@/lib/prisma';

const WHATSAPP_API_URL = "https://graph.facebook.com/v20.0";
const PHONE_NUMBER_ID = 781950855010751;
const ACCESS_TOKEN = "EAATCd12aucIBP6AJtN2vO4esFtvUkdoAkHaNzZCkZCN7ZBes1GsG4Y3JlOEkqzADC0IH28Dxd22r8lS1nelMIUl4ZCLX28gDFQHYZApZBg3cqyEVDgHWghuhJuc5hxmNHVKJbA6LFZAxvRXzJxZAQf6rvQ1farDShZCqdxBA7Dbwjfo3LRjMHJvly7ZBe2eNamjAZDZD";

export async function GET() {
    try {
        // 1️⃣ Fetch leads that haven't been reviewed yet
        const leads = await prisma.lead.findMany({
            where: {
                reviewdone: false,
            },
        });

        if (leads.length === 0) {
            return NextResponse.json(
                { message: "No pending leads to message." },
                { status: 200 }
            );
        }

        console.log(`📞 Found ${leads.length} leads to message`);

        let sentCount = 0;
        let skippedCount = 0;

        // 2️⃣ Loop through each lead
        for (const lead of leads) {
            const { id, phone, reviewdone, sent } = lead;

            // 🛡️ Double safety check
            if (reviewdone === true) {
                console.log(`# Skipping lead ${id}: already reviewed`);
                skippedCount++;
                continue;
            }

            if (!phone) {
                console.warn(`Skipping lead ${id}: no phone number`);
                skippedCount++;
                continue;
            }

            // 3️⃣ Format phone number
            let formattedPhone = phone.trim();
            if (formattedPhone.startsWith("0")) {
                formattedPhone = "92" + formattedPhone.slice(1);
            } else if (!formattedPhone.startsWith("92")) {
                formattedPhone = "92" + formattedPhone;
            }

            try {
                // 4️⃣ Determine which template to send based on 'sent' field
                let templateName, buttonText, bodyText1, bodyText2;

                if (!sent) {
                    // ✅ FIRST MESSAGE - Initial review request
                    templateName = "review_link";
                    buttonText = "⭐ Rate Us Now";
                    name = name;
                } else {
                    // 🔄 FOLLOW-UP MESSAGE - Send reminder
                    templateName = "review_followup";
                    buttonText = "⭐ Yes, Rate Now";
                    name = name;
                }

                // 5️⃣ Send WhatsApp Template Message
                await axios.post(
                    `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
                    {
                        messaging_product: "whatsapp",
                        recipient_type: "individual",
                        to: formattedPhone,
                        type: "template",
                        template: {
                            name: templateName,
                            language: { code: "en_US" },
                            components: [
                                {
                                    type: "body",
                                    parameters: [
                                        { type: "text", text: bodyText1 },
                                    ],
                                },
                                {
                                    type: "button",
                                    sub_type: "url",
                                    index: 0,
                                    parameters: [
                                        { type: "text", text: id },
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

                console.log(`✅ ${!sent ? 'Initial' : 'Follow-up'} message sent to lead ${id} (${formattedPhone})`);
                sentCount++;

                // 📌 Mark as sent
                await prisma.lead.update({
                    where: { id },
                    data: {
                        sent: true,
                        sentAt: new Date()
                    }
                });

            } catch (error) {
                console.error(
                    `❌ Failed to send message to lead ${id}:`,
                    error.response?.data || error.message
                );
                skippedCount++;
            }
        }

        return NextResponse.json(
            {
                message: "Processed all pending leads.",
                stats: {
                    total: leads.length,
                    sent: sentCount,
                    skipped: skippedCount
                }
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error sending messages to leads:", error);
        return NextResponse.json(
            { error: "Something went wrong while sending messages." },
            { status: 500 }
        );
    }
}