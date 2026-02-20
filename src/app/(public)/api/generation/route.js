import { GoogleGenerativeAI } from "@google/generative-ai";
import { getUserFromRequest } from "../../../../../lib/getUserFromReq";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export const runtime = "nodejs";

let dailyLimit = 12;

export async function POST(req) {
    try {
        const user = await getUserFromRequest(req);

        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const now = new Date();

        const startOfToday = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0, 0, 0, 0
        );

        const todaysUsage = await prisma.imageGeneration.count({
            where: {
                userId: user.id,
                createdAt: {
                    gte: startOfToday,
                },
            },
        });

        if (todaysUsage >= dailyLimit) {
            return NextResponse.json(
                { error: `Daily limit reached. You can generate ${dailyLimit} images per day.` },
                { status: 429 }
            );
        }




        const formData = await req.formData();

        // MUST match <input name="image">
        const imageFile = formData.get("image");
        const prompt = formData.get("prompt") || "Redesign this building with a modern luxury facade, realistic lighting, high-end materials, and keep structure unchanged.";

        // safety check
        if (!imageFile || typeof imageFile === "string") {
            return Response.json(
                { error: "Image not received by server" },
                { status: 400 }
            );
        }

        // convert file → base64
        const bytes = await imageFile.arrayBuffer();
        const base64 = Buffer.from(bytes).toString("base64");

        const imagePart = {
            inlineData: {
                data: base64,
                mimeType: imageFile.type || "image/jpeg",
            },
        };

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // Vision model (correct one for image editing)
        const model = genAI.getGenerativeModel({
            model: "gemini-3-pro-image-preview", // nano banana Pro
        });

        const result = await model.generateContent([
            { text: prompt },
            imagePart
        ]);


        const response = await result.response;

        // find returned image
        const generated = response.candidates?.[0]?.content?.parts?.find(
            (p) => p.inlineData
        );

        if (!generated) {
            console.log(response);
            return Response.json(
                { error: "Gemini did not return an image" },
                { status: 500 }
            );
        }

        await prisma.imageGeneration.create({
            data: {
                userId: user.id,
                style: formData.get("style") || "unknown",
            },
        });


        return Response.json({
            image: generated.inlineData.data,
        });

    } catch (err) {
        console.error("GENERATION ERROR:", err);
        return Response.json({ error: "Generation failed" }, { status: 500 });
    }
}
