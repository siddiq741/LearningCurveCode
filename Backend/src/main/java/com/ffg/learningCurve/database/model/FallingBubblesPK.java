package com.ffg.learningCurve.database.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class FallingBubblesPK implements Serializable {

    private int gameId;

    private String name;
}
