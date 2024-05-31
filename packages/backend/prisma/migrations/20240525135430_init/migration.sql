/*
  Warnings:

  - Made the column `owner` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_owner_fkey";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "owner" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
