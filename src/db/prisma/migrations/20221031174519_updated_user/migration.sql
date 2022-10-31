/*
  Warnings:

  - Made the column `approbed` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `published` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "OAuthSource" AS ENUM ('GOOGLE', 'LOCAL');

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "approbed" SET NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "published" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "source" "OAuthSource" NOT NULL DEFAULT 'GOOGLE',
ALTER COLUMN "role" SET NOT NULL;
