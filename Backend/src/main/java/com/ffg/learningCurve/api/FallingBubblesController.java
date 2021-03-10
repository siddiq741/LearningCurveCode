package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.TestTable;
import com.ffg.learningCurve.services.FallingBubblesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin
public class FallingBubblesController {

    @Autowired
    FallingBubblesService fallingBubblesService;

    @PostMapping(value = "add", consumes = "application/json")
    public void setData(@RequestBody Games games) {
        fallingBubblesService.createGame(games);
    }

    @GetMapping("getFBById/{id}")
    public Games getData(@PathVariable("id") int id) {
        return fallingBubblesService.getGameDataById(id);
    }

    }
