package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "games")
@Getter
@Setter
public class Games {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="GAME_ID")
    private int gameId;
    @Column(name="GAME_NAME", unique = true)
    private String name;
    @Column(name= "GAME_TYPE")
    private String gameType;
    @Column(name= "GAME_INSTRUCTIONS")
    private String instructions;
    @Column(name="CRE_TS")
    private String creationTime;
    @Column(name="CRE_ID")
    private String createId;
    @Column(name="UPDT_TS")
    private  String updateTimeStamp;
    @Column(name="UPDT_ID")
    private String updateId;

    @Transient
    List<FallingBubblesQuestions> questions;

    @Transient
    List<MCQGame> mcqquestions;


}
