package com.ffg.learningCurve.database.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MtfModelClient {
    private int gameID;
    private String gameName;
    private String instructions;
    private int questionsCount;
    private String[] questions;
    private String[] options;
    private int solution;
}
