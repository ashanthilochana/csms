CREATE DATABASE  IF NOT EXISTS `csmsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `csmsdb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: csmsdb
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `nic` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  PRIMARY KEY (`nic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('200123456789','admin@csms.com','Ashan Thilochana');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `branchId` int NOT NULL AUTO_INCREMENT,
  `district` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mapLocation` varchar(255) DEFAULT NULL,
  `contactNumber` varchar(15) NOT NULL,
  PRIMARY KEY (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES (13,'Malabe','No. 300b, I. Jothipala Mawatha, Malabe','No. 300b, I. Jothipala Mawatha, Malabe','0110224355'),(14,'Polonnaruwa','No. 114 New Town, Polonnaruwa','No. 114 New Town, Polonnaruwa','0112424523'),(15,'Kandy','No.243, Kandy','No.243, Kandy','0825353536'),(16,'Negambo','No.53 Negambo, Sri Lanka','No.53 Negambo, Sri Lanka','0255352456'),(17,'Galle','No.53 Galle, Sri Lanka','No.53 Galle, Sri Lanka','0273446464'),(18,'Jaffna','No. 536 Jaffna, Sri Lanka','No. 536 Jaffna, Sri Lanka','0456754785'),(19,'Madakalapuwa','No. 54 Madakalapura, Sri Lanka','No. 54 Madakalapura, Sri Lanka','0768243652'),(20,'Anuradhapura','No.89 Anuradhapura, Sri Lanka','No.89 Anuradhapura, Sri Lanka','0234646474'),(21,'Colombo','No.10 Colombo 7, Colombo','No.10 Colombo 7, Colombo','0117856677');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branchmanager`
--

DROP TABLE IF EXISTS `branchmanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branchmanager` (
  `nic` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `branchId` int DEFAULT NULL,
  PRIMARY KEY (`nic`),
  KEY `branchId` (`branchId`),
  CONSTRAINT `branchmanager_ibfk_1` FOREIGN KEY (`branchId`) REFERENCES `branch` (`branchId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branchmanager`
--

LOCK TABLES `branchmanager` WRITE;
/*!40000 ALTER TABLE `branchmanager` DISABLE KEYS */;
INSERT INTO `branchmanager` VALUES ('200123344556','ashnthilochana98@gmail.com','Ashan Thilochana',13),('200134455667','ishanneranjana@gmail.com','Ishan Neranjana',21);
/*!40000 ALTER TABLE `branchmanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `nic` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contactNumber` varchar(15) NOT NULL,
  `branchId` int DEFAULT NULL,
  PRIMARY KEY (`nic`),
  KEY `branchId` (`branchId`),
  CONSTRAINT `client_ibfk_1` FOREIGN KEY (`branchId`) REFERENCES `branch` (`branchId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES ('200012422535','ushan@gmail.com','Ushan Kavindu','No. 45/b Colombo, Sri Lanka','0745345666',13),('200245685343','pabasara@gmail.com','Pabasara Rajapaksha','No. 89 Galewela, Sri Lanka','0717856888',13),('200256757575','heshani@gmail.com','Heshani Rajapaksha','No. 53 Kurunegala','0708953999',13),('200258886866','kaushani@gmail.com','Kaushani Hettiarachchi','No. 34 Kuliyapitiya, Sri Lanka','0783455677',13);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientfeedback`
--

DROP TABLE IF EXISTS `clientfeedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientfeedback` (
  `feedbackId` int NOT NULL AUTO_INCREMENT,
  `clientNic` varchar(15) NOT NULL,
  `rating` int NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`feedbackId`),
  KEY `clientNic` (`clientNic`),
  CONSTRAINT `clientfeedback_ibfk_1` FOREIGN KEY (`clientNic`) REFERENCES `client` (`nic`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientfeedback`
--

LOCK TABLES `clientfeedback` WRITE;
/*!40000 ALTER TABLE `clientfeedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientfeedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courierfee`
--

DROP TABLE IF EXISTS `courierfee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courierfee` (
  `courierFeeId` int NOT NULL AUTO_INCREMENT,
  `maxWeight` int NOT NULL,
  `fee` int NOT NULL,
  PRIMARY KEY (`courierFeeId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courierfee`
--

LOCK TABLES `courierfee` WRITE;
/*!40000 ALTER TABLE `courierfee` DISABLE KEYS */;
INSERT INTO `courierfee` VALUES (1,1000,300),(2,5000,350),(3,7000,450),(4,10000,500),(5,30000,550),(6,100000,600);
/*!40000 ALTER TABLE `courierfee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deliveryperson`
--

DROP TABLE IF EXISTS `deliveryperson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deliveryperson` (
  `nic` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contactNumber` varchar(15) NOT NULL,
  `vehicleNumber` varchar(20) NOT NULL,
  `branchId` int DEFAULT NULL,
  PRIMARY KEY (`nic`),
  KEY `branchId` (`branchId`),
  CONSTRAINT `deliveryperson_ibfk_1` FOREIGN KEY (`branchId`) REFERENCES `branch` (`branchId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliveryperson`
--

LOCK TABLES `deliveryperson` WRITE;
/*!40000 ALTER TABLE `deliveryperson` DISABLE KEYS */;
INSERT INTO `deliveryperson` VALUES ('200045687964','ishenchathuranga@gmail.com','Ishen Chathuranga','No. 34 Colombo 7, Sri Lanka','0725684756','DS YU-3543',13),('200134675645','heshanijayasingha@gmail.com','Heshani Jayasingha','No. 35 Kurunegala, Sri Lanka','0789567865','CP UI-1245',13);
/*!40000 ALTER TABLE `deliveryperson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdelivery`
--

DROP TABLE IF EXISTS `orderdelivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdelivery` (
  `orderDeliveryId` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `deliveryPersonNic` varchar(15) NOT NULL,
  PRIMARY KEY (`orderDeliveryId`),
  KEY `orderId` (`orderId`),
  KEY `deliveryPersonNic` (`deliveryPersonNic`),
  CONSTRAINT `orderdelivery_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
  CONSTRAINT `orderdelivery_ibfk_2` FOREIGN KEY (`deliveryPersonNic`) REFERENCES `deliveryperson` (`nic`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdelivery`
--

LOCK TABLES `orderdelivery` WRITE;
/*!40000 ALTER TABLE `orderdelivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdelivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `weight` decimal(10,2) NOT NULL,
  `registeredDate` date NOT NULL,
  `receivedDate` date DEFAULT NULL,
  `deliveryDate` date DEFAULT NULL,
  `paymentDate` date DEFAULT NULL,
  `receiverName` varchar(50) NOT NULL,
  `receiverAddress` varchar(255) NOT NULL,
  `receiverContactNumber` varchar(15) NOT NULL,
  `specialNote` varchar(255) DEFAULT NULL,
  `packageTypeId` int NOT NULL,
  `senderNic` varchar(15) NOT NULL,
  `statusId` int NOT NULL,
  `sendingBranchId` int NOT NULL,
  `receivingBranchId` int NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `packageTypeId` (`packageTypeId`),
  KEY `senderNic` (`senderNic`),
  KEY `statusId` (`statusId`),
  KEY `sendingBranchId` (`sendingBranchId`),
  KEY `receivingBranchId` (`receivingBranchId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`packageTypeId`) REFERENCES `packagetype` (`packageTypeId`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`senderNic`) REFERENCES `client` (`nic`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `orderstatus` (`statusId`),
  CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`sendingBranchId`) REFERENCES `branch` (`branchId`),
  CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`receivingBranchId`) REFERENCES `branch` (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderstatus`
--

DROP TABLE IF EXISTS `orderstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderstatus` (
  `statusId` int NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`statusId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderstatus`
--

LOCK TABLES `orderstatus` WRITE;
/*!40000 ALTER TABLE `orderstatus` DISABLE KEYS */;
INSERT INTO `orderstatus` VALUES (1,'Registered','Package was dropped at the sending branch'),(2,'On Route','Inter-Branch Transportation'),(3,'Received','Pakcage is received to the delivery branch.'),(4,'Handed to Deliver','Package was handed over to the delivery driver'),(5,'Delivered','Package was delivered'),(6,'Returned','Package was returned'),(7,'Assigned','Assigned a delviery person to the order');
/*!40000 ALTER TABLE `orderstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packagetype`
--

DROP TABLE IF EXISTS `packagetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packagetype` (
  `packageTypeId` int NOT NULL AUTO_INCREMENT,
  `packageType` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `extraDeliveryFee` decimal(10,2) NOT NULL,
  PRIMARY KEY (`packageTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packagetype`
--

LOCK TABLES `packagetype` WRITE;
/*!40000 ALTER TABLE `packagetype` DISABLE KEYS */;
INSERT INTO `packagetype` VALUES (1,'General','Standard package type',48.60),(2,'Fragile','Handle with care',67.99),(3,'Furniture','Large and heavy items',45.78),(4,'Plastic','Packages containing plastic items',65.87),(5,'Medicine','Pharmaceutical products',10.65);
/*!40000 ALTER TABLE `packagetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnedorder`
--

DROP TABLE IF EXISTS `returnedorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `returnedorder` (
  `returnOrderId` int NOT NULL AUTO_INCREMENT,
  `returnedDate` date NOT NULL,
  `orderId` int NOT NULL,
  PRIMARY KEY (`returnOrderId`),
  KEY `orderId` (`orderId`),
  CONSTRAINT `returnedorder_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnedorder`
--

LOCK TABLES `returnedorder` WRITE;
/*!40000 ALTER TABLE `returnedorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `returnedorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `roleId` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Branch Manager'),(3,'Accountant'),(4,'Delivery Person'),(5,'Transport Agent'),(6,'Client'),(7,'Business Analyst');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `routeId` int NOT NULL AUTO_INCREMENT,
  `routeName` varchar(50) NOT NULL,
  `firstBranchId` int NOT NULL,
  `secondBranchId` int NOT NULL,
  PRIMARY KEY (`routeId`),
  KEY `firstBranchId` (`firstBranchId`),
  KEY `secondBranchId` (`secondBranchId`),
  CONSTRAINT `route_ibfk_1` FOREIGN KEY (`firstBranchId`) REFERENCES `branch` (`branchId`),
  CONSTRAINT `route_ibfk_2` FOREIGN KEY (`secondBranchId`) REFERENCES `branch` (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (22,'Malabe to Colombo',13,21),(24,'Polonnaruwa to Kandy',14,15),(25,'Negambo to Galle',16,17),(26,'Jaffna to Polonnaruwa',18,14),(27,'Madakalapuwa to Anuradhapura',19,20),(28,'Colombo to Kandy',21,15),(29,'Colombo to Galle',21,17);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supportresponsestatus`
--

DROP TABLE IF EXISTS `supportresponsestatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supportresponsestatus` (
  `responseStatusId` int NOT NULL AUTO_INCREMENT,
  `responseStatus` varchar(50) NOT NULL,
  PRIMARY KEY (`responseStatusId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supportresponsestatus`
--

LOCK TABLES `supportresponsestatus` WRITE;
/*!40000 ALTER TABLE `supportresponsestatus` DISABLE KEYS */;
INSERT INTO `supportresponsestatus` VALUES (1,'Open'),(2,'Active'),(3,'Closed');
/*!40000 ALTER TABLE `supportresponsestatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supportticket`
--

DROP TABLE IF EXISTS `supportticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supportticket` (
  `ticketId` int NOT NULL AUTO_INCREMENT,
  `clientNic` varchar(15) NOT NULL,
  `branchId` int NOT NULL,
  `reasonId` int NOT NULL,
  `message` varchar(255) NOT NULL,
  `responseStatusId` int NOT NULL,
  `responseMessage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticketId`),
  KEY `clientNic` (`clientNic`),
  KEY `branchId` (`branchId`),
  KEY `reasonId` (`reasonId`),
  KEY `responseStatusId` (`responseStatusId`),
  CONSTRAINT `supportticket_ibfk_1` FOREIGN KEY (`clientNic`) REFERENCES `client` (`nic`),
  CONSTRAINT `supportticket_ibfk_2` FOREIGN KEY (`branchId`) REFERENCES `branch` (`branchId`),
  CONSTRAINT `supportticket_ibfk_3` FOREIGN KEY (`reasonId`) REFERENCES `supportticketreasons` (`reasonId`),
  CONSTRAINT `supportticket_ibfk_4` FOREIGN KEY (`responseStatusId`) REFERENCES `supportresponsestatus` (`responseStatusId`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supportticket`
--

LOCK TABLES `supportticket` WRITE;
/*!40000 ALTER TABLE `supportticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `supportticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supportticketreasons`
--

DROP TABLE IF EXISTS `supportticketreasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supportticketreasons` (
  `reasonId` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(50) NOT NULL,
  PRIMARY KEY (`reasonId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supportticketreasons`
--

LOCK TABLES `supportticketreasons` WRITE;
/*!40000 ALTER TABLE `supportticketreasons` DISABLE KEYS */;
INSERT INTO `supportticketreasons` VALUES (1,'Issue about a package'),(2,'Issue about a branch'),(3,'Issue about a service'),(4,'Issue about a delivery person');
/*!40000 ALTER TABLE `supportticketreasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transportagent`
--

DROP TABLE IF EXISTS `transportagent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportagent` (
  `nic` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `vehicleNumber` varchar(15) NOT NULL,
  `routeId` int NOT NULL,
  PRIMARY KEY (`nic`),
  KEY `routeId` (`routeId`),
  CONSTRAINT `transportagent_ibfk_1` FOREIGN KEY (`routeId`) REFERENCES `route` (`routeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportagent`
--

LOCK TABLES `transportagent` WRITE;
/*!40000 ALTER TABLE `transportagent` DISABLE KEYS */;
INSERT INTO `transportagent` VALUES ('2001353636366','polo@gmail.com','Ushan Palitha','NC OP-2856',24),('2001449646946','yuvithaherath@gmail.com','Yuvitha Herath','WP IO-0924',28),('200145566778','kavindu@gmail.com','Kavindu Senavirathna','CP XP-1245',22);
/*!40000 ALTER TABLE `transportagent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercredentials`
--

DROP TABLE IF EXISTS `usercredentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usercredentials` (
  `userNic` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int NOT NULL,
  UNIQUE KEY `userNic` (`userNic`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `usercredentials_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercredentials`
--

LOCK TABLES `usercredentials` WRITE;
/*!40000 ALTER TABLE `usercredentials` DISABLE KEYS */;
INSERT INTO `usercredentials` VALUES ('200012422535','$2b$10$eFqqLoA/OkW8fl7vwf1c7eJiEjndB.BYQzZRDHqfWdk6R8MCXAHai',6),('200045687964','$2b$10$8XMVuDLC31uQvaLvjR/gte/0wilahqnuO0HeW4LuKaDqAD6qUyUb6',4),('200123344556','$2b$10$4bfcPalm8XhLFQQZALdlteMBFjyWXhR5yDIwAe9mHr1TU.cFKlYEa',2),('200123456789','$2b$10$0x6odUb72lvLd5qHsQ10iu4w0p5Akg8I5ViMBFlC74jjyupzC8GU.',1),('200134455667','$2b$10$o9aXDroUWULFfl153ghHA.e1UOB8AA9MFo8WqutpKsguEXBFktcEe',2),('200134675645','$2b$10$AFMrza86aVjX5/omfnabMe2oAQML/lYmqa3ssWjE3nC4lRIQnexAy',4),('2001353636366','$2b$10$Q5Eu5bATlUGRX7xrNE1S6.xkvggoAz1MgUo75KtWfzDTBbaf0os1.',5),('2001449646946','$2b$10$D0N3ZmzP.tj2gLKnaRukj.SqiUyUjmmb2WQCo3/wnvCqhjhPO1ixC',5),('200145566778','$2b$10$saO4amCvhbEsVMvv.LcaP.KYWZT6QuxI/aG4z796RY1rWI8jbummW',5),('200245685343','$2b$10$KieAzAARLlpJxlVDCtoGNeyOPk9XxmFxYgMYYVHQpQNM/oQaHNWeq',6),('200256757575','$2b$10$P2u9QozfsTJbs.weWYm8leZ9hD5vUD/95ld9mfqJoTeu6PtgIJ5ca',6),('200258886866','$2b$10$5.GaolLet4wkMwtVc6JMde22ZrgQML.HBcStcsIIyD7bU1Tnb2hlu',6);
/*!40000 ALTER TABLE `usercredentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'csmsdb'
--

--
-- Dumping routines for database 'csmsdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `getCourierFee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCourierFee`(
    IN packageWeight DECIMAL(10,2), 
    IN packageTypeId INT
)
BEGIN
    DECLARE baseFee DECIMAL(10,2);
    DECLARE extraFee DECIMAL(10,2);
    DECLARE totalFee DECIMAL(10,2);
    DECLARE maximumWeightCourierFeeId INT;
    DECLARE maximumWeight DECIMAL(10,2);
    
    SELECT courierFeeId 
    INTO maximumWeightCourierFeeId
    FROM courierfee 
    ORDER BY maxWeight DESC 
    LIMIT 1;
    
    SELECT CAST(maxWeight AS DECIMAL(10,2)) 
    INTO maximumWeight 
    FROM courierfee
    WHERE courierFeeId = maximumWeightCourierFeeId;
    
    IF packageWeight > maximumWeight THEN
        SELECT CAST(fee AS DECIMAL(10,2)) 
        INTO baseFee
        FROM courierfee
        WHERE courierFeeId = maximumWeightCourierFeeId;
    ELSE
        SELECT CAST(fee AS DECIMAL(10,2)) 
        INTO baseFee
        FROM courierfee
        WHERE maxWeight >= packageWeight
        ORDER BY maxWeight ASC
        LIMIT 1;
    END IF;
    
    SELECT extraDeliveryFee 
    INTO extraFee
    FROM packagetype p
    WHERE p.packageTypeId = packageTypeId; 
    
    SET totalFee = baseFee + extraFee;
    
    SELECT totalFee;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07  3:57:11
