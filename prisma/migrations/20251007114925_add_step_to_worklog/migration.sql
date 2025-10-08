-- AlterTable
ALTER TABLE "public"."WorkLog" ADD COLUMN     "stepId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."WorkLog" ADD CONSTRAINT "WorkLog_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "public"."Step"("id") ON DELETE SET NULL ON UPDATE CASCADE;
