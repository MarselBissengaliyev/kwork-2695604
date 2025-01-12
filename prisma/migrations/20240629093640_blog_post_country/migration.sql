-- AlterTable
ALTER TABLE "blog_posts" ADD COLUMN     "country_id" INTEGER;

-- CreateIndex
CREATE INDEX "blog_posts_country_id_idx" ON "blog_posts"("country_id");
