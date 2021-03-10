package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MtfModel;
import com.ffg.learningCurve.database.model.MtfModelClient;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MtfService {
    String addMtf(MtfModel mtf);
    List<Games> fetchAllGames();

    MtfModelClient fetchGameById(String id);
}