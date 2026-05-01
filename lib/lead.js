import fs from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

// Create data folder if it doesn't exist
if (!fs.existsSync(path.dirname(LEADS_FILE))) {
    fs.mkdirSync(path.dirname(LEADS_FILE), { recursive: true });
}

// Initialize empty file if it doesn't exist
if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

export function saveLead(phone) {
    const data = fs.readFileSync(LEADS_FILE, 'utf8');
    const leads = JSON.parse(data);

    // Check if phone already exists
    const exists = leads.some(lead => lead.phone === phone);
    if (exists) {
        return { success: false, message: 'Phone number already exists' };
    }

    // Auto-increment id
    const maxId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) : 0;
    const newId = maxId + 1;

    const now = new Date().toISOString();

    const newLead = {
        id: newId,
        phone: phone,
        reviewdone: false,
        createdAt: now,
        updatedAt: now
    };

    leads.push(newLead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    return { success: true, lead: newLead };
}

export function getLeads() {
    const data = fs.readFileSync(LEADS_FILE, 'utf8');
    return JSON.parse(data);
}