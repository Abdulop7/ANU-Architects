// app/api/import-leads/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import prisma from '../../../../lib/prisma.js';

export async function GET() {
    const filePath = path.join(process.cwd(), 'leads.json');

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'leads.json not found' }, { status: 404 });
    }

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const leads = JSON.parse(data);

        if (!Array.isArray(leads)) {
            return NextResponse.json({ error: 'leads.json must be an array' }, { status: 400 });
        }

        let added = 0;
        let skipped = 0;

        for (const lead of leads) {
            let { name, phone: rawPhone } = lead;

            if (!rawPhone) {
                skipped++;
                continue;
            }

            let phone = rawPhone.toString().replace(/[^0-9]/g, '');

            if (phone.startsWith('92') && phone.length === 12) {
                phone = '0' + phone.slice(2);
            } else if (phone.length === 10) {
                phone = '0' + phone;
            }

            try {
                await prisma.lead.upsert({
                    where: { phone },
                    update: { name: name?.trim() || null },
                    create: {
                        phone,
                        name: name?.trim() || null,
                        reviewdone: false,
                        sent: false,
                    },
                });
                added++;
            } catch (error) {
                if (error.code === 'P2002') {
                    skipped++;
                } else {
                    console.error('DB Error:', error.message);
                    skipped++;
                }
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Leads imported successfully!',
            added,
            skipped,
            totalInDB: await prisma.lead.count()
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}