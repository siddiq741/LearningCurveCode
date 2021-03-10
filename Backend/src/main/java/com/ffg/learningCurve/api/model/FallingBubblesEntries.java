package com.ffg.learningCurve.api.model;

import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.util.List;

@Getter
@Setter
public class FallingBubblesEntries {

    private String name;
    private List<FallingBubblesQuestions> questions;
}
