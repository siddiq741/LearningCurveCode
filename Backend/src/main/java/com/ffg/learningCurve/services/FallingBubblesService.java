package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.FallingBubblesOptions;
import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import com.ffg.learningCurve.database.repository.FallingBubblesOptionsRepository;
import com.ffg.learningCurve.database.repository.FallingBubblesQuestionsRepository;
import com.ffg.learningCurve.database.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FallingBubblesService {

    @Autowired
    GamesRepository gamesRepository;

    @Autowired
    FallingBubblesQuestionsRepository fallingBubblesQuestionsRepository;

    @Autowired
    FallingBubblesOptionsRepository fallingBubblesOptionsRepository;

    public static final String FALLING_BUBBLES = "Falling Bubbles";

    public void createGame(Games games) {
        games.setGameType(FALLING_BUBBLES);
        Games gamesAfterSave = gamesRepository.saveAndFlush(games);

        for (FallingBubblesQuestions question: games.getQuestions()) {
            question.setGameId(gamesAfterSave.getGameId());
            FallingBubblesQuestions savedQuestion = fallingBubblesQuestionsRepository.save(question);
            for (FallingBubblesOptions option : question.getOptions()) {
                option.setGameId(gamesAfterSave.getGameId());
                option.setQuestionId(savedQuestion.getQuestionId());
                fallingBubblesOptionsRepository.save(option);
            }
        }
    }

    public Games getGameDataById(int id) {
        Optional<Games> games = gamesRepository.findById(id);
        Games game = games.get();
        int gameId = game.getGameId();
        List<FallingBubblesQuestions> questionsList = fallingBubblesQuestionsRepository.getQuestionsByGameId(gameId);
        for (FallingBubblesQuestions question: questionsList) {
            question.setOptions(fallingBubblesOptionsRepository.getOptionsByGameAndQuestionId(gameId, question.getQuestionId()));
        }
        games.get().setQuestions(questionsList);
        return games.get();
    }

}
