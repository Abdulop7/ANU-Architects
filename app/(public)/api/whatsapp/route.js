import {sendMessage} from "@/lib/whatsappClient";

export async function POST() {
    try {
        await sendMessage('923047856411', 'Hello this is Abdul Saboor');

        return Response.json({
            success: true
        });

    } catch (err) {
        console.error(err);

        return Response.json(
            { error: err.message },
            { status: 500 }
        );
    }
}