package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "age_groups")
@Entity
public class AgeGroups {

    @Column(name = "ID")
    @Id
    private int id;

    @Column(name = "NAME")
    private String groupName;

    @Column(name = "RANGE")
    private String ageRange;
}
