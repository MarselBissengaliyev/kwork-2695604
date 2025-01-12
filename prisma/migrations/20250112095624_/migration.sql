/*
  Warnings:

  - Added the required column `make_id` to the `listings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `listings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_id` to the `listings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `listings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusBid" AS ENUM ('CURRENT', 'WON', 'LOST');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PAID', 'REQUEST_A_REFUND', 'REFUND');

-- AlterTable
ALTER TABLE "listings" ADD COLUMN     "auction" TEXT,
ADD COLUMN     "auction_at" TIMESTAMP(3),
ADD COLUMN     "color" TEXT,
ADD COLUMN     "condition" TEXT,
ADD COLUMN     "damage" TEXT,
ADD COLUMN     "damageSecondary" TEXT,
ADD COLUMN     "document" TEXT,
ADD COLUMN     "drive" TEXT,
ADD COLUMN     "engine" TEXT,
ADD COLUMN     "final_bid" INTEGER,
ADD COLUMN     "fuel" TEXT,
ADD COLUMN     "keys" BOOLEAN DEFAULT false,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "loss" TEXT,
ADD COLUMN     "lot" INTEGER,
ADD COLUMN     "make_id" INTEGER NOT NULL,
ADD COLUMN     "mileage" INTEGER NOT NULL,
ADD COLUMN     "model_id" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "seller" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "transmission" TEXT,
ADD COLUMN     "vin" TEXT,
ADD COLUMN     "winner_id" INTEGER,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "makes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_sticky" BOOLEAN DEFAULT false,

    CONSTRAINT "makes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "make_id" INTEGER NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bids" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "lot_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusBid" NOT NULL DEFAULT 'CURRENT',

    CONSTRAINT "bids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" DOUBLE PRECISION NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_info" (
    "id" SERIAL NOT NULL,
    "make_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "min_price" INTEGER NOT NULL,
    "max_price" INTEGER NOT NULL,
    "avg_price" INTEGER NOT NULL,
    "min_mileage" INTEGER NOT NULL,
    "max_mileage" INTEGER NOT NULL,
    "avg_mileage" INTEGER NOT NULL,
    "listing_count" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "market_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "makes_name_key" ON "makes"("name");

-- CreateIndex
CREATE INDEX "models_make_id_idx" ON "models"("make_id");

-- CreateIndex
CREATE INDEX "media_lot_id_idx" ON "media"("lot_id");

-- CreateIndex
CREATE INDEX "bids_lot_id_idx" ON "bids"("lot_id");

-- CreateIndex
CREATE INDEX "bids_user_id_idx" ON "bids"("user_id");

-- CreateIndex
CREATE INDEX "market_info_make_id_idx" ON "market_info"("make_id");

-- CreateIndex
CREATE INDEX "market_info_model_id_idx" ON "market_info"("model_id");

-- CreateIndex
CREATE INDEX "market_info_make_id_model_id_year_region_idx" ON "market_info"("make_id", "model_id", "year", "region");

-- CreateIndex
CREATE INDEX "market_info_make_id_model_id_idx" ON "market_info"("make_id", "model_id");

-- CreateIndex
CREATE INDEX "listings_winner_id_idx" ON "listings"("winner_id");

-- CreateIndex
CREATE INDEX "listings_make_id_idx" ON "listings"("make_id");

-- CreateIndex
CREATE INDEX "listings_model_id_idx" ON "listings"("model_id");
