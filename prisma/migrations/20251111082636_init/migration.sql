-- CreateTable
CREATE TABLE "Customlog" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "workDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customlog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customlog" ADD CONSTRAINT "Customlog_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
