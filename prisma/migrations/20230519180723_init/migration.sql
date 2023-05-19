-- CreateTable
CREATE TABLE "Programmer" (
    "id" SERIAL NOT NULL,
    "handle" TEXT NOT NULL,

    CONSTRAINT "Programmer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Programmer_handle_key" ON "Programmer"("handle");
