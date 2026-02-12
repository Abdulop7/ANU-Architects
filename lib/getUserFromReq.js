import jwt from "jsonwebtoken";
import prisma from "./prisma";

export async function getUserFromRequest(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    return user;
  } catch {
    return null;
  }
}
