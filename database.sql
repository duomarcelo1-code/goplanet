-- =====================================================
-- GoPlanet - Base de datos del proyecto final
-- Motor: MySQL / MariaDB
--
-- Importar desde phpMyAdmin (pestana Importar) o por consola:
--   mysql -u root -p < database.sql
-- =====================================================

CREATE DATABASE IF NOT EXISTS `programacion`
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE `programacion`;


-- =====================================================
-- Tabla: usuarios
-- Login del panel de administracion.
-- La password se guarda hasheada con MD5 (models/usuariosModels.js).
-- =====================================================

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
    `id`       INT(11)     NOT NULL AUTO_INCREMENT,
    `usuario`  VARCHAR(50) NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usuario de prueba -> usuario: marcelo / password: 1234
INSERT INTO `usuarios` (`usuario`, `password`) VALUES
('marcelo', '81dc9bdb52d04dc20036dbd8313ed055');


-- =====================================================
-- Tabla: promocionesespeciales
-- Novedades/promociones administradas desde /admin/novedades
-- (ABM completo) y listadas en el home.
-- =====================================================

DROP TABLE IF EXISTS `promocionesespeciales`;

CREATE TABLE `promocionesespeciales` (
    `id`     INT(11)      NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `cuerpo` TEXT         NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de ejemplo para que el home no aparezca vacio
INSERT INTO `promocionesespeciales` (`titulo`, `cuerpo`) VALUES
('Verano en Brasil', 'Paquetes a Rio de Janeiro con aereo, hotel y traslados incluidos. Financiacion en 12 cuotas sin interes.'),
('Escapada a Bariloche', 'Fin de semana largo en la Patagonia: 3 noches con media pension y excursion al Cerro Catedral.'),
('Mendoza y sus vinedos', 'Tour por las mejores bodegas mendocinas con degustacion incluida. Salidas todos los fines de semana.');
