import makeWASocket, {
    useMultiFileAuthState,
    DisconnectReason
} from "@whiskeysockets/baileys";

import P from "pino";

let sock;
let isConnecting = false;

export async function connectWhatsApp() {
    if (sock || isConnecting) {
        console.log("Already connected or connecting");
        return sock;
    }

    isConnecting = true;

    const { state, saveCreds } = await useMultiFileAuthState("./auth");

    sock = makeWASocket({
        auth: state,
        logger: P({ level: "silent" }),
        printQRInTerminal: true,
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log("QR:", qr);
        }

        if (connection === "open") {
            console.log("WhatsApp connected");
            isConnecting = false;
        }

        if (connection === "close") {
            const reason = lastDisconnect?.error?.output?.statusCode;

            console.log("Closed:", reason);

            const shouldReconnect = reason !== DisconnectReason.loggedOut;

            sock = null;
            isConnecting = false;

            if (shouldReconnect) {
                setTimeout(connectWhatsApp, 3000);
            }
        }
    });

    isConnecting = false;
    return sock;
}

export function getSock() {
    return sock;
}

export async function sendMessage(phone, message) {
    const sock = getSock();

    if (!sock) {
        throw new Error("WhatsApp is not connected");
    }

    const jid = `${phone}@s.whatsapp.net`;

    await sock.sendMessage(jid, {
        text: message,
    });
}