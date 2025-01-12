/*
  Warnings:

  - You are about to drop the `city_category_seo_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seo_settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "city_category_seo_settings";

-- DropTable
DROP TABLE "seo_settings";

-- CreateTable
CREATE TABLE "city_categories" (
    "id" SERIAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "seo_title" VARCHAR(200),
    "seo_description" TEXT,

    CONSTRAINT "city_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "city_categories_category_id_idx" ON "city_categories"("category_id");

-- CreateIndex
CREATE INDEX "city_categories_city_id_idx" ON "city_categories"("city_id");
