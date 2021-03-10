package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MtfEntity;
import com.ffg.learningCurve.database.model.MtfModel;
import com.ffg.learningCurve.database.model.MtfModelClient;
import com.ffg.learningCurve.database.repository.GamesRepository;
import com.ffg.learningCurve.database.repository.MtfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.SerializationUtils;

import java.util.*;

@Service
public class MtfServiceImpl implements MtfService{

    @Autowired
    MtfRepository mtfRepository;

    @Autowired
    GamesRepository gamesRepository;


    @Override
    public String addMtf(MtfModel mtf) {
        String result = null;
        Games games = new Games();
        games.setName(mtf.getGameName());
        games.setGameType("Match the Following");
        games.setInstructions(mtf.getInstructions());

        Games gameAfterSave = gamesRepository.save(games);

        MtfEntity mtfEntity = new MtfEntity();
        mtfEntity.setQuestions(mtf.getQuestions());
        mtfEntity.setOptions(mtf.getOptions());
        mtfEntity.setQuestionsCount(String.valueOf(mtf.getCount()));
        mtfEntity.setSolution(mtf.getSolution());
        mtfEntity.setGameId(gameAfterSave.getGameId());
        MtfEntity mtfAfterSave = mtfRepository.save(mtfEntity);
        if(Objects.nonNull(mtfAfterSave)){
            result = "SUCCESS";
        }
        else{
            result = "FAILURE";
        }
        return result;
    }

    @Override
    public List<Games> fetchAllGames() {
       return gamesRepository.findAll();
    }

    public String[] getSliceOfArray(String[] arr, int start, int end) {
        String[] slice = new String[end - start];

        for (int i = 0; i < slice.length; i++) {
            slice[i] = arr[start + i];
        }
        return slice;
    }

    @Override
    public MtfModelClient fetchGameById(String id) {
        String questions;
        String options;

        MtfModelClient mtfModelClient = new MtfModelClient();

        Optional<Games> game = gamesRepository.findById(Integer.parseInt(id));
        Optional<MtfEntity> mtf = mtfRepository.findById(Integer.parseInt(id));

        mtfModelClient.setGameID(game.get().getGameId());
        mtfModelClient.setGameName(game.get().getName());
        mtfModelClient.setInstructions(game.get().getInstructions());

        mtfModelClient.setQuestionsCount(Integer.parseInt(mtf.get().getQuestionsCount()));

        questions = mtf.get().getQuestions();
        options = mtf.get().getOptions();

        String questionsArray[] = questions.split(":");
        String optionsArray[] = options.split(":");

        questionsArray = getSliceOfArray(questionsArray, 1, questionsArray.length);
        optionsArray = getSliceOfArray(optionsArray, 1, optionsArray.length);

        mtfModelClient.setQuestions(questionsArray);
        mtfModelClient.setOptions(optionsArray);
        mtfModelClient.setSolution(mtf.get().getSolution());

        return mtfModelClient;
    }
}
