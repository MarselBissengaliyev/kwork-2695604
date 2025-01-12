/*
  Warnings:

  - You are about to drop the column `userId` on the `listings` table. All the data in the column will be lost.
  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `listings` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "listings_userId_idx";

-- AlterTable
ALTER TABLE "listings" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "Subscription";

-- CreateTable
CREATE TABLE "blog_posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN DEFAULT false,
    "picture" TEXT,
    "seo_title" VARCHAR(500),
    "seo_description" TEXT,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "published_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "is_subscribe" "IS_SUBSCRIBE" NOT NULL DEFAULT 'Enable',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "blog_posts_user_id_idx" ON "blog_posts"("user_id");

-- CreateIndex
CREATE INDEX "listings_user_id_idx" ON "listings"("user_id");
