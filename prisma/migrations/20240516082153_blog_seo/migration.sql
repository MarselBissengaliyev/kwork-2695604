-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "seo_description" TEXT,
ADD COLUMN     "seo_title" VARCHAR(500),
ADD COLUMN     "updated_at" TIMESTAMP(3);
