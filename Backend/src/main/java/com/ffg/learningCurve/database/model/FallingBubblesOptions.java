package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "fb_options")
@Getter
@Setter
public class FallingBubblesOptions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="OP_ID")
    private int optionId;

    @Column(name="GAME_ID")
    private int gameId;

    @Column(name="Q_ID")
    private int questionId;

    @Column(name="OPTN")
    private String option;

    @Column(name="IS_ANS")
    private int isAns;



}
