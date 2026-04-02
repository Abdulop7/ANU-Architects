-- DropForeignKey
ALTER TABLE "public"."Announcement" DROP CONSTRAINT "Announcement_createdById_fkey";

-- AlterTable
ALTER TABLE "public"."Announcement" ALTER COLUMN "createdById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Announcement" ADD CONSTRAINT "Announcement_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
