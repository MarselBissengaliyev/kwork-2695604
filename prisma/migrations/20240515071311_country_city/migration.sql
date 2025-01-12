-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "city_id" INTEGER,
ADD COLUMN     "country_id" INTEGER,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "imageSrc" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "location_value" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3),
ALTER COLUMN "created_at" DROP NOT NULL;

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "is_sticky" BOOLEAN DEFAULT false,
    "icon" VARCHAR(200),
    "seo_title" VARCHAR(200),
    "seo_description" TEXT,
    "country_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_categories" (
    "listing_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "listing_categories_pkey" PRIMARY KEY ("listing_id","category_id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "picture" VARCHAR(200),
    "is_sticky" BOOLEAN DEFAULT false,
    "seo_title" VARCHAR(200),
    "seo_description" TEXT,
    "country_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE INDEX "categories_country_id_idx" ON "categories"("country_id");

-- CreateIndex
CREATE INDEX "listing_categories_category_id_idx" ON "listing_categories"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "countries_slug_key" ON "countries"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "cities_slug_key" ON "cities"("slug");

-- CreateIndex
CREATE INDEX "cities_country_id_idx" ON "cities"("country_id");

-- CreateIndex
CREATE INDEX "Favourite_listingId_idx" ON "Favourite"("listingId");

-- CreateIndex
CREATE INDEX "Listing_country_id_idx" ON "Listing"("country_id");

-- CreateIndex
CREATE INDEX "Listing_city_id_idx" ON "Listing"("city_id");

-- CreateIndex
CREATE INDEX "Review_listingId_idx" ON "Review"("listingId");
