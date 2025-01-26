-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "street" TEXT NOT NULL,
    "line" TEXT,
    "state" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "trends_value" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
