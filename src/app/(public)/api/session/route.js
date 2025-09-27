import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "../../../../../lib/prisma";


const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ loggedIn: false });

    const decoded = jwt.verify(token, JWT_SECRET);

    let fullName = decoded.name; // 👈 use name from JWT

    // Fallback: if token doesn’t have name
    if (!fullName) {
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { name: true }, // 👈 select name
      });
      fullName = user?.name || null;
    }

    return NextResponse.json({
      loggedIn: true,
      userId: decoded.id,
      username: decoded.username,
      role: decoded.role,
      fullName, // returning as fullName for consistency in frontend
    });
  } catch (err) {
    console.error("Session route error:", err);
    return NextResponse.json({ loggedIn: false });
  }
}
