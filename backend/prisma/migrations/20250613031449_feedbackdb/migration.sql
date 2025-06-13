/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `FeedbackDesc` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[formId]` on the table `FeedbackForm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `FeedbackDesc_label_key` ON `FeedbackDesc`(`label`);

-- CreateIndex
CREATE UNIQUE INDEX `FeedbackForm_formId_key` ON `FeedbackForm`(`formId`);

-- RenameIndex
ALTER TABLE `feedbackdesc` RENAME INDEX `FeedbackDesc_categoryId_fkey` TO `FeedbackDesc_categoryId_idx`;

-- RenameIndex
ALTER TABLE `feedbackform` RENAME INDEX `FeedbackForm_descriptionId_fkey` TO `FeedbackForm_descriptionId_idx`;
