package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "levels")
@Entity
public class Level {

    @Column(name = "ID")
    @Id
    private int id;

    @Column(name = "NAME")
    private String levelName;
}
