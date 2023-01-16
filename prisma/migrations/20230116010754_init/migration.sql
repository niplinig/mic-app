-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `videoNumber` TINYINT NOT NULL,
    `videoName` VARCHAR(50) NOT NULL,
    `videoStart` VARCHAR(50) NOT NULL,
    `videoEnd` VARCHAR(50) NOT NULL,
    `reactionSeconds` VARCHAR(50) NOT NULL,
    `reactionStart` VARCHAR(50) NOT NULL,
    `diferenceReaction` VARCHAR(50) NOT NULL,
    `license` VARCHAR(10) NOT NULL,
    `age` TINYINT NOT NULL,
    `sex` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
