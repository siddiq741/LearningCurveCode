package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "level_category_map")
@Entity
public class LevelCategoryMap {

    @Column(name = "ID")
    @Id
    private int id;

    @Column(name = "LVL_NM")
    private String levelName;

    @Column(name = "CAT_ID")
    private int categoryId;

    @Column(name = "AGE_GRP_NM")
    private String ageGroupName;
}
