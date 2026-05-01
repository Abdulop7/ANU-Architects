-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "rating" INTEGER,
ADD COLUMN     "sent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sentAt" TIMESTAMP(3);
