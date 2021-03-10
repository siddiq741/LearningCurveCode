package com.ffg.learningCurve.database.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
//@Getter
//@Setter
public class FallingBubblesQuestionsPK  implements Serializable {
    @Transient
    private Games games;

    private int questionId;



}
