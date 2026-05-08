import fs from 'fs';
import path from 'path';
import prisma from './lib/prisma.js';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

async function importLeads() {
    try {
        // Read data from JSON file
        const data = fs.readFileSync(LEADS_FILE, 'utf8');
        const leads = JSON.parse(data);

        console.log(`📞 Found ${leads.length} leads to import\n`);

        let added = 0;
        let skipped = 0;

        for (const lead of leads) {
            const { name, phone } = lead;

            // Validate phone number
            if (!phone) {
                console.warn(`⚠️  Skipping: No phone number for ${name || 'Unknown'}`);
                skipped++;
                continue;
            }

            try {
                await prisma.lead.create({
                    data: {
                        phone: phone.trim(),
                        name: name ? name.trim() : null, // 👈 Save name if provided
                        // id, reviewdone, sent, createdAt, updatedAt are auto-handled
                    }
                });
                console.log(`✅ Added: ${name || 'Unknown'} - ${phone}`);
                added++;
            } catch (error) {
                if (error.code === 'P2002') {
                    console.log(`#  Skipped (already exists): ${phone}`);
                    skipped++;
                } else {
                    console.log(`❌ Error for ${phone}:`, error.message);
                }
            }
        }

        console.log(`\n📊 Summary:`);
        console.log(`✅ Added: ${added}`);
        console.log(`#  Skipped: ${skipped}`);

    } catch (error) {
        console.error('❌ Error reading file:', error.message);
    }
}

importLeads();