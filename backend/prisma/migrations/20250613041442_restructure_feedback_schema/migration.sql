/*
  Warnings:

  - Added the required column `description` to the `FeedbackDesc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `FeedbackForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedbackdesc` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `feedbackform` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `FeedbackForm_categoryId_idx` ON `FeedbackForm`(`categoryId`);

-- AddForeignKey
ALTER TABLE `FeedbackForm` ADD CONSTRAINT `FeedbackForm_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `FeedbackCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
