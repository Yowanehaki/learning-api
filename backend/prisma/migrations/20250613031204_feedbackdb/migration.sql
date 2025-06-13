/*
  Warnings:

  - You are about to drop the column `key` on the `feedbackdesc` table. All the data in the column will be lost.
  - You are about to drop the column `descId` on the `feedbackform` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `feedbackform` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descriptionId` to the `FeedbackForm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `feedbackform` DROP FOREIGN KEY `FeedbackForm_descId_fkey`;

-- DropForeignKey
ALTER TABLE `feedbackform` DROP FOREIGN KEY `feedbackform_userId_fkey`;

-- DropIndex
DROP INDEX `FeedbackDesc_key_key` ON `feedbackdesc`;

-- DropIndex
DROP INDEX `FeedbackForm_descId_fkey` ON `feedbackform`;

-- DropIndex
DROP INDEX `feedbackform_formId_key` ON `feedbackform`;

-- DropIndex
DROP INDEX `feedbackform_userId_idx` ON `feedbackform`;

-- AlterTable
ALTER TABLE `feedbackdesc` DROP COLUMN `key`;

-- AlterTable
ALTER TABLE `feedbackform` DROP COLUMN `descId`,
    DROP COLUMN `userId`,
    ADD COLUMN `descriptionId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `user`;

-- AddForeignKey
ALTER TABLE `FeedbackForm` ADD CONSTRAINT `FeedbackForm_descriptionId_fkey` FOREIGN KEY (`descriptionId`) REFERENCES `FeedbackDesc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
