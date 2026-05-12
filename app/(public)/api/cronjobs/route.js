
export async function GET() {
    console.log("Cron executed");

    // send whatsapp messages here

    return Response.json({
        success: true,
    });
}