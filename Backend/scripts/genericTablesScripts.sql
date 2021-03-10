CREATE TABLE `age_groups` (
                              `ID` int NOT NULL AUTO_INCREMENT,
                              `NAME` varchar(45) DEFAULT NULL,
                              `RANGE` varchar(45) DEFAULT NULL,
                              PRIMARY KEY (`ID`),
                              KEY `NAME` (`NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `category` (
                            `ID` int NOT NULL,
                            `NAME` varchar(45) NOT NULL,
                            PRIMARY KEY (`ID`),
                            KEY `NAME` (`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `game_type` (
                             `ID` int NOT NULL AUTO_INCREMENT,
                             `TYPE` varchar(45) DEFAULT NULL,
                             PRIMARY KEY (`ID`),
                             KEY `TYPE` (`TYPE`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `games` (
  `GAME_ID` int NOT NULL AUTO_INCREMENT,
  `GAME_NAME` varchar(45) NOT NULL,
  `GAME_TYPE` varchar(45) DEFAULT NULL,
  `CRE_ID` varchar(10) DEFAULT NULL,
  `CRE_TS` datetime DEFAULT NULL,
  `UPDT_ID` varchar(10) DEFAULT NULL,
  `UPDT_TS` datetime DEFAULT NULL,
  `GAME_INSTRUCTIONS` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`GAME_ID`,`GAME_NAME`),
  UNIQUE KEY `NAME_UNIQUE` (`GAME_NAME`),
  KEY `games_ibfk_3` (`GAME_TYPE`),
  CONSTRAINT `games_ibfk_3` FOREIGN KEY (`GAME_TYPE`) REFERENCES `game_type` (`TYPE`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;





