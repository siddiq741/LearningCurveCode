package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "mtf_game")
@Getter
@Setter
public class MtfEntity {

    @Id
    @Column(name="game_ID")
    private int gameId;
    @Column(name="questions")
    private String questions;
    @Column(name= "options")
    private String options;
    @Column(name="questions_count")
    private String questionsCount;
    @Column(name="solution")
    private int solution;

}
