CREATE DATABASE IF NOT EXISTS `node-express-database`;
USE `node-express-database`;

CREATE TABLE IF NOT EXISTS `users`(
`id` BINARY(16) NOT NULL PRIMARY KEY,
`name` varchar(255) DEFAULT NULL,
`email` varchar(255) DEFAULT NULL,
`password` varchar(255) DEFAULT NULL,
`picture` varchar(255) DEFAULT NULL,
`introduction` varchar(255) DEFAULT NULL,
`tags` varchar(255) DEFAULT NULL,
`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
UNIQUE KEY `email` (`email`)
);