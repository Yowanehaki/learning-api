/*
  Warnings:

  - A unique constraint covering the columns `[formId]` on the table `feedbackform` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `feedbackform` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedbackform` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `feedbackform_formId_key` ON `feedbackform`(`formId`);

-- CreateIndex
CREATE INDEX `feedbackform_userId_idx` ON `feedbackform`(`userId`);

-- AddForeignKey
ALTER TABLE `feedbackform` ADD CONSTRAINT `feedbackform_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
