-- CreateTable
CREATE TABLE "public"."Step" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Step" ADD CONSTRAINT "Step_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
