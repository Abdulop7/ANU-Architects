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

            // Format phone number – works for Pakistan, UAE, Saudi, etc.
            let formattedPhone = lead.phone.trim();

            // Step 1: Remove + sign if present
            if (formattedPhone.startsWith('+')) {
                formattedPhone = formattedPhone.slice(1);
            }

            // Step 2: If it's Pakistani number (starts with 0 or 92), convert to 92xxxxxxxxxxx
            if (formattedPhone.startsWith('0')) {
                formattedPhone = '92' + formattedPhone.slice(1);
            } else if (formattedPhone.startsWith('92')) {
                // already correct – do nothing
                formattedPhone = formattedPhone;
            }
            // Step 3: For international numbers like UAE (+971), Saudi (+966), etc. → keep as-is (without +)
            else {
                // It's already without +, and not Pakistani → perfect for WhatsApp
                formattedPhone = formattedPhone;
            }

            try {
                // 5️⃣ Determine which template to send
                let templateName, bodyText1;

                if (!lead.sent) {
                    // ✅ FIRST MESSAGE
                    templateName = "review_link";
                    bodyText1 = lead.name || "";
                } else {
                    // 🔄 FOLLOW-UP MESSAGE
                    templateName = "review_followup";
                    bodyText1 = lead.name || "";
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
                            language: { code: "en" },
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

export async function POST(request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { error: 'Lead ID is required' },
                { status: 400 }
            );
        }

        // 1️⃣ Fetch the specific lead
        const lead = await prisma.lead.findUnique({
            where: { id: parseInt(id) }
        });

        if (!lead) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            );
        }

        // 2️⃣ Check if already reviewed
        if (lead.reviewdone) {
            return NextResponse.json(
                { error: 'This lead has already been reviewed' },
                { status: 400 }
            );
        }

        // 3️⃣ Check if phone exists
        if (!lead.phone) {
            return NextResponse.json(
                { error: 'No phone number for this lead' },
                { status: 400 }
            );
        }

        // Format phone number – works for Pakistan, UAE, Saudi, etc.
        let formattedPhone = lead.phone.trim();

        // Step 1: Remove + sign if present
        if (formattedPhone.startsWith('+')) {
            formattedPhone = formattedPhone.slice(1);
        }

        // Step 2: If it's Pakistani number (starts with 0 or 92), convert to 92xxxxxxxxxxx
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '92' + formattedPhone.slice(1);
        } else if (formattedPhone.startsWith('92')) {
            // already correct – do nothing
            formattedPhone = formattedPhone;
        }
        // Step 3: For international numbers like UAE (+971), Saudi (+966), etc. → keep as-is (without +)
        else {
            // It's already without +, and not Pakistani → perfect for WhatsApp
            formattedPhone = formattedPhone;
        }


        // 5️⃣ Determine which template to send
        let templateName, bodyText1;

        if (!lead.sent) {
            // ✅ FIRST MESSAGE
            templateName = "review_link";
            bodyText1 = lead.name || "";
        } else {
            // 🔄 FOLLOW-UP MESSAGE
            templateName = "review_followup";
            bodyText1 = lead.name || "";
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
                    language: { code: "en" },
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


        console.log(`✅ ${!lead.sent ? 'Initial' : 'Follow-up'} message sent to lead ${id} (${formattedPhone})`);

        // 7️⃣ Mark as sent
        await prisma.lead.update({
            where: { id: parseInt(id) },
            data: {
                sent: true,
                sentAt: new Date()
            }
        });

        return NextResponse.json({
            message: `${!lead.sent ? 'Initial' : 'Follow-up'} message sent successfully!`,
            lead: {
                id: lead.id,
                phone: lead.phone,
                name: lead.name,
                sent: true,
                sentAt: new Date()
            }
        }, { status: 200 });

    } catch (error) {
        console.error(`❌ Failed to send message to lead:`, error.response?.data || error.message);

        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}