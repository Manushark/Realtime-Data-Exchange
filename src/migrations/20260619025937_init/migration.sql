-- CreateTable
CREATE TABLE "ExchangeEvent" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExchangeEvent_pkey" PRIMARY KEY ("id")
);
