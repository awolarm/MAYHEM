/*
  Warnings:

  - Added the required column `company` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;
