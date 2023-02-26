/*
  Warnings:

  - You are about to drop the `StatBlocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `StatBlocks`;

-- CreateTable
CREATE TABLE `StatBlock` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `prompt` VARCHAR(300) NULL,
    `response` VARCHAR(8000) NULL,
    `user` INTEGER NOT NULL,
    `rating` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
