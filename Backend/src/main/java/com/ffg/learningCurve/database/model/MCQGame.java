package com.ffg.learningCurve.database.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "mcq_game")
@Getter
@Setter
public class MCQGame {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="QUESTION_ID")
    private int questionId;

    @JsonIgnore
    @Column(name= "GAME_ID")
    @NonNull
    private int gameId;

    @Column(name= "QUESTION")
    private String question;

    @Column(name= "OPTION_1")
    private String option1;

    @Column(name= "OPTION_2")
    private String option2;

    @Column(name= "OPTION_3")
    private String option3;

    @Column(name= "OPTION_4")
    private String option4;

    @Column(name ="ANSWER")
    @NotNull
    private int answer;
}
