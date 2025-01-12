-- AlterTable
ALTER TABLE "countries" ADD COLUMN     "region_config_id" INTEGER;

-- CreateTable
CREATE TABLE "region_configurations" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "locale" VARCHAR(10) NOT NULL,
    "country_name" VARCHAR(50) NOT NULL,
    "country_code" VARCHAR(10) NOT NULL,
    "domain" VARCHAR(50) NOT NULL,
    "seo_title" VARCHAR(250),
    "seo_description" TEXT,
    "seo_title_template" VARCHAR(50),
    "seo_description_template" VARCHAR(100),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "region_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "region_configurations_slug_key" ON "region_configurations"("slug");

-- CreateIndex
CREATE INDEX "countries_region_config_id_idx" ON "countries"("region_config_id");
