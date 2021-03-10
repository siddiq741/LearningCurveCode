package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="test_table")
@Getter
@Setter
public class TestTable {
    @Id
    @Column(name="ID")
    private Integer id;
    @Column(name="NAME")
    private String name;

}
