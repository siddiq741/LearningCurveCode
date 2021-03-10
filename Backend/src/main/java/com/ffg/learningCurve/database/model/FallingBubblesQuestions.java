package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "fb_questions")
@Getter
@Setter
public class FallingBubblesQuestions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Q_ID")
    private int questionId;

    @Column(name = "GAME_ID")
    private int gameId;

    @Column(name="QUESTION")
    private String question;


    @Transient
    List<FallingBubblesOptions> options;

}
