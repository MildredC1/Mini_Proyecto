-- TABLA USUARIOS
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `edad` int DEFAULT NULL,
  `altura` decimal(5,2) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `empresa_id` int DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
);

-- TABLA EMPRESA
CREATE TABLE `empresa` (
  `empresa_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`empresa_id`)
);

