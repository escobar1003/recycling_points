-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: recicling_points
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `tipo_usuario` varchar(30) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificacion` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int unsigned NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canjes`
--

DROP TABLE IF EXISTS `canjes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canjes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int unsigned NOT NULL,
  `descripcion` varchar(60) NOT NULL,
  `beneficio` varchar(50) NOT NULL,
  `puntos_utilizados` int NOT NULL,
  `fecha_canje` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `canjes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canjes`
--

LOCK TABLES `canjes` WRITE;
/*!40000 ALTER TABLE `canjes` DISABLE KEYS */;
/*!40000 ALTER TABLE `canjes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encargado`
--

DROP TABLE IF EXISTS `encargado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encargado` (
  `id_encargado` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `punto` varchar(25) NOT NULL,
  `id_entrega_material` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_encargado`),
  KEY `id_entrega_material` (`id_entrega_material`),
  CONSTRAINT `encargado_ibfk_1` FOREIGN KEY (`id_entrega_material`) REFERENCES `entrega_material` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encargado`
--

LOCK TABLES `encargado` WRITE;
/*!40000 ALTER TABLE `encargado` DISABLE KEYS */;
/*!40000 ALTER TABLE `encargado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrega_material`
--

DROP TABLE IF EXISTS `entrega_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrega_material` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int unsigned NOT NULL,
  `lugar` varchar(40) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `peso` decimal(8,2) NOT NULL,
  `tipo_material` enum('papel','plastico','carton','latas','vidrio') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `entrega_material_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrega_material`
--

LOCK TABLES `entrega_material` WRITE;
/*!40000 ALTER TABLE `entrega_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `entrega_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horario` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_supermercado` int unsigned NOT NULL,
  `id_usuario` int unsigned NOT NULL,
  `H_inicial` time NOT NULL,
  `H_final` time NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_supermercado` (`id_supermercado`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`id_supermercado`) REFERENCES `supermercado` (`id_supermercado`) ON DELETE CASCADE,
  CONSTRAINT `horario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_supermercado` int unsigned NOT NULL,
  `id_usuario` int unsigned NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `puntos` int NOT NULL,
  `estado` enum('optimo','bueno','falta') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_supermercado` (`id_supermercado`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `materiales_ibfk_1` FOREIGN KEY (`id_supermercado`) REFERENCES `supermercado` (`id_supermercado`) ON DELETE CASCADE,
  CONSTRAINT `materiales_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes_error`
--

DROP TABLE IF EXISTS `reportes_error`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportes_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int unsigned NOT NULL,
  `id_soporte_tecnico` int unsigned NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `estado` enum('bien','error') NOT NULL,
  `fecha_reporte` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_soporte_tecnico` (`id_soporte_tecnico`),
  CONSTRAINT `reportes_error_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `reportes_error_ibfk_2` FOREIGN KEY (`id_soporte_tecnico`) REFERENCES `soporte_tecnico` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes_error`
--

LOCK TABLES `reportes_error` WRITE;
/*!40000 ALTER TABLE `reportes_error` DISABLE KEYS */;
/*!40000 ALTER TABLE `reportes_error` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int unsigned DEFAULT NULL,
  `id_administrador` int unsigned DEFAULT NULL,
  `id_supermercado` int unsigned DEFAULT NULL,
  `id_soporte_tecnico` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_administrador` (`id_administrador`),
  KEY `id_supermercado` (`id_supermercado`),
  KEY `id_soporte_tecnico` (`id_soporte_tecnico`),
  CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `roles_ibfk_2` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`) ON DELETE CASCADE,
  CONSTRAINT `roles_ibfk_3` FOREIGN KEY (`id_supermercado`) REFERENCES `supermercado` (`id_supermercado`) ON DELETE CASCADE,
  CONSTRAINT `roles_ibfk_4` FOREIGN KEY (`id_soporte_tecnico`) REFERENCES `soporte_tecnico` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soporte_tecnico`
--

DROP TABLE IF EXISTS `soporte_tecnico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soporte_tecnico` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fallas` varchar(100) NOT NULL,
  `mantenimiento` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soporte_tecnico`
--

LOCK TABLES `soporte_tecnico` WRITE;
/*!40000 ALTER TABLE `soporte_tecnico` DISABLE KEYS */;
/*!40000 ALTER TABLE `soporte_tecnico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supermercado`
--

DROP TABLE IF EXISTS `supermercado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supermercado` (
  `id_supermercado` int unsigned NOT NULL AUTO_INCREMENT,
  `id_encargado` int unsigned NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_supermercado`),
  KEY `id_encargado` (`id_encargado`),
  CONSTRAINT `supermercado_ibfk_1` FOREIGN KEY (`id_encargado`) REFERENCES `encargado` (`id_encargado`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supermercado`
--

LOCK TABLES `supermercado` WRITE;
/*!40000 ALTER TABLE `supermercado` DISABLE KEYS */;
/*!40000 ALTER TABLE `supermercado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `tipo_usuario` varchar(30) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) NOT NULL,
  `puntos` int unsigned DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-01 22:26:33
