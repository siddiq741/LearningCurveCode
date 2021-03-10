
CREATE TABLE `fb_questions` (
  `Q_ID` int NOT NULL AUTO_INCREMENT,
  `GAME_ID` int NOT NULL,
  `QUESTION` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Q_ID`,`GAME_ID`),
  KEY `FK_GAME_idx` (`GAME_ID`),
  CONSTRAINT `FK_GAME` FOREIGN KEY (`GAME_ID`) REFERENCES `games` (`GAME_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `fb_options` (
  `OP_ID` int NOT NULL AUTO_INCREMENT,
  `GAME_ID` int NOT NULL,
  `Q_ID` int NOT NULL,
  `OPTN` varchar(500) DEFAULT NULL,
  `IS_ANS` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`OP_ID`,`GAME_ID`,`Q_ID`),
  KEY `FK_QUES_idx` (`GAME_ID`,`Q_ID`),
  CONSTRAINT `FK_QUES` FOREIGN KEY (`GAME_ID`, `Q_ID`) REFERENCES `fb_questions` (`GAME_ID`, `Q_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
