package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.FallingBubblesOptions;
import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MCQGame;
import com.ffg.learningCurve.database.repository.FallingBubblesOptionsRepository;
import com.ffg.learningCurve.database.repository.FallingBubblesQuestionsRepository;
import com.ffg.learningCurve.database.repository.GamesRepository;
import com.ffg.learningCurve.database.repository.MCQGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MCQGameService {
    @Autowired
    MCQGameRepository mcqGameRepository;

    @Autowired
    GamesRepository gamesRepository;

    public static final String MCQ_GAME = "MCQ";


    public void createMCQGame(Games games) {
        games.setGameType(MCQ_GAME);
        Games gamesAfterSave = gamesRepository.saveAndFlush(games);

        for (MCQGame mcqGameQuestions: games.getMcqquestions()) {
            mcqGameQuestions.setGameId(gamesAfterSave.getGameId());
            mcqGameRepository.save(mcqGameQuestions);
        }
    }

    public Games getGameDataById(int id) {
        Optional<Games> games = gamesRepository.findById(id);
        Games game = games.get();
        int gameId = game.getGameId();
        List<MCQGame> questionsList = mcqGameRepository.getQuestionsByMCQGameId(gameId);
        game.setMcqquestions(questionsList);
        return game;
    }

}
