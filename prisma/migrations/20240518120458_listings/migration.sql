/*
  Warnings:

  - You are about to drop the `Listing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Listing";

-- CreateTable
CREATE TABLE "listings" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "picture" TEXT,
    "published" BOOLEAN DEFAULT false,
    "address" TEXT NOT NULL,
    "features" TEXT,
    "price" INTEGER NOT NULL,
    "status" "Status" DEFAULT 'Pending',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "country_id" INTEGER,
    "city_id" INTEGER,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "published_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "listings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "listings_userId_idx" ON "listings"("userId");

-- CreateIndex
CREATE INDEX "listings_country_id_idx" ON "listings"("country_id");

-- CreateIndex
CREATE INDEX "listings_city_id_idx" ON "listings"("city_id");
