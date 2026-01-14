import puppeteer from "puppeteer";
import axios from "axios";

export async function POST(req) {
    try {
        const { mxid } = await req.json();

        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();

        const url = `https://www.1miba.com/down/getdownurl/type/5/id/${mxid}.html`;


        await page.goto(url, { waitUntil: "networkidle2" });
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36");
        await page.setViewport({ width: 1280, height: 800 });

        // Wait for download button
        await page.waitForSelector("button.download", { timeout: 15000 });

        // Click and intercept download request
        await page.click("button.download");

        const [response] = await Promise.all([
            page.waitForResponse(resp => resp.url().includes("/api/DownFile/downFile") && resp.status() === 200),
        ]);

        const buffer = await response.buffer();


        await browser.close();

        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": `attachment; filename=model.skp`,
            },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
