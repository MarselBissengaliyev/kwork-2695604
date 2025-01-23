/*
  Warnings:

  - The values [Pending,Approved] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - The `auction` column on the `listings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Auction" AS ENUM ('IAAI', 'COPART', 'OPENLANE');

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Sold', 'NotSold');
ALTER TABLE "listings" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "listings" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "bids" ADD COLUMN     "buy_now" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "listings" ADD COLUMN     "avg_price" INTEGER,
ADD COLUMN     "buy_now" INTEGER,
ADD COLUMN     "clean_title" BOOLEAN DEFAULT false,
ADD COLUMN     "current_bid" INTEGER,
ADD COLUMN     "estimated_cost" INTEGER,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "registred_pl" BOOLEAN DEFAULT false,
ADD COLUMN     "run_and_drive" BOOLEAN DEFAULT false,
ALTER COLUMN "status" DROP DEFAULT,
DROP COLUMN "auction",
ADD COLUMN     "auction" "Auction";

-- AlterTable
ALTER TABLE "market_info" ALTER COLUMN "region" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "reviews";
