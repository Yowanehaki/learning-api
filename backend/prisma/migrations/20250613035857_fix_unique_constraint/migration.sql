/*
  Warnings:

  - A unique constraint covering the columns `[formId,descriptionId]` on the table `FeedbackForm` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `FeedbackForm_formId_key` ON `feedbackform`;

-- CreateIndex
CREATE UNIQUE INDEX `FeedbackForm_formId_descriptionId_key` ON `FeedbackForm`(`formId`, `descriptionId`);
