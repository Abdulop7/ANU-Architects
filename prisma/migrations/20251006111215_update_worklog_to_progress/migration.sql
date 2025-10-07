/*
  Warnings:

  - You are about to drop the column `hours` on the `WorkLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."WorkLog" DROP COLUMN "hours",
ADD COLUMN     "progress" DOUBLE PRECISION NOT NULL DEFAULT 0;
