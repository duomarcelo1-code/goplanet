-- GoPlanet - Base de datos (MySQL / MariaDB)

CREATE DATABASE IF NOT EXISTS `programacion`
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE `programacion`;


-- Tabla usuarios: login del admin (password en MD5)

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
    `id`       INT(11)     NOT NULL AUTO_INCREMENT,
    `usuario`  VARCHAR(50) NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usuarios de prueba (password: 1234)
INSERT INTO `usuarios` (`usuario`, `password`) VALUES
('marcelo', '81dc9bdb52d04dc20036dbd8313ed055'),
('flavia',  '81dc9bdb52d04dc20036dbd8313ed055');


-- Tabla promocionesespeciales: novedades del ABM

DROP TABLE IF EXISTS `promocionesespeciales`;

CREATE TABLE `promocionesespeciales` (
    `id`     INT(11)      NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `cuerpo` TEXT         NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos del CRUD
INSERT INTO `promocionesespeciales` (`titulo`, `cuerpo`) VALUES
('Verano en Brasil', 'Paquetes a Rio de Janeiro con aereo, hotel y traslados incluidos. Financiacion en 12 cuotas sin interes.'),
('Escapada a Bariloche', 'Fin de semana largo en la Patagonia: 3 noches con media pension y excursion al Cerro Catedral.'),
('Mendoza y sus vinedos', 'Tour por las mejores bodegas mendocinas con degustacion incluida. Salidas todos los fines de semana.');
