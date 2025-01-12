-- CreateTable
CREATE TABLE "seo_settings" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200),
    "description" TEXT,

    CONSTRAINT "seo_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city_category_seo_settings" (
    "id" SERIAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "city_category_seo_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "city_category_seo_settings_category_id_idx" ON "city_category_seo_settings"("category_id");

-- CreateIndex
CREATE INDEX "city_category_seo_settings_city_id_idx" ON "city_category_seo_settings"("city_id");
