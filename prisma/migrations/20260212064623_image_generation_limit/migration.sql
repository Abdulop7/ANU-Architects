-- CreateTable
CREATE TABLE "ImageGeneration" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "style" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImageGeneration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageGeneration" ADD CONSTRAINT "ImageGeneration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
