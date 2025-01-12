/*
  Warnings:

  - You are about to drop the `Favourite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Favourite";

-- CreateTable
CREATE TABLE "listing_favourites" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "listing_id" INTEGER NOT NULL,

    CONSTRAINT "listing_favourites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "listing_favourites_user_id_listing_id_idx" ON "listing_favourites"("user_id", "listing_id");

-- CreateIndex
CREATE INDEX "listing_favourites_listing_id_idx" ON "listing_favourites"("listing_id");
