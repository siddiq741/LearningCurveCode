package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MCQGame;
import com.ffg.learningCurve.database.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin
public class GamesController {

    @Autowired
    GamesRepository gamesRepository;

    @GetMapping("getAllGames")
    public List<Games> getAllGames()
    {
        return gamesRepository.findAll();

    }
}
