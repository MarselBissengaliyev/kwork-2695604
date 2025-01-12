/*
  Warnings:

  - You are about to alter the column `picture` on the `blog_posts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(250)`.
  - You are about to drop the column `icon` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `listings` table. All the data in the column will be lost.
  - You are about to alter the column `picture` on the `listings` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(250)`.

*/
-- AlterTable
ALTER TABLE "blog_posts" ALTER COLUMN "picture" SET DATA TYPE VARCHAR(250);

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "icon",
ADD COLUMN     "picture" VARCHAR(250);

-- AlterTable
ALTER TABLE "listings" DROP COLUMN "price",
ALTER COLUMN "picture" SET DATA TYPE VARCHAR(250);
