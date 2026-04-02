-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_assignedById_fkey";

-- AlterTable
ALTER TABLE "public"."Task" ALTER COLUMN "assignedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
