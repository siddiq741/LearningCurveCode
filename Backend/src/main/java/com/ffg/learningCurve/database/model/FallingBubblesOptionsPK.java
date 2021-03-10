package com.ffg.learningCurve.database.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class FallingBubblesOptionsPK  implements Serializable {


    private int optionId;


    private int gameId;


    private int questionId;


}
