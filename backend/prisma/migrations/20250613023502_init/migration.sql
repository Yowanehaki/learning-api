-- CreateTable
CREATE TABLE `FeedbackCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedbackDesc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `FeedbackDesc_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedbackForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formId` VARCHAR(191) NOT NULL,
    `descId` INTEGER NOT NULL,
    `value` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FeedbackDesc` ADD CONSTRAINT `FeedbackDesc_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `FeedbackCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackForm` ADD CONSTRAINT `FeedbackForm_descId_fkey` FOREIGN KEY (`descId`) REFERENCES `FeedbackDesc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
