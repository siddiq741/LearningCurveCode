package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "game_type")
@Entity
public class GameType {

    @Column(name = "ID")
    @Id
    private int id;

    @Column(name = "TYPE")
    private String gameType;
}
