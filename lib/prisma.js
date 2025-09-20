import { PrismaClient } from "../generated/prisma";

// Prevent multiple instances of PrismaClient in dev mode
let prisma = new PrismaClient({
    log: ["query", "error", "warn"], // 👈 optional logging
  });

export default prisma;