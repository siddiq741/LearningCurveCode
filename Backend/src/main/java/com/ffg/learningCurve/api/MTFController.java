package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MtfModel;
import com.ffg.learningCurve.database.model.MtfModelClient;
import com.ffg.learningCurve.services.MtfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mtf")
@CrossOrigin(origins = "http://localhost:3000")
public class MTFController {

    @Autowired
    MtfService mtfService;

    @PostMapping("/create")
    public String createGame(@RequestBody MtfModel mtfModel){
        return mtfService.addMtf(mtfModel);
    }

    //get all match the following games
    @GetMapping(path="mtfGames")
    public List<Games> getMatchTheFollowings() {
        return mtfService.fetchAllGames();
    }

    //get all match the following games by id
    @GetMapping(path="mtfGames/{id}")
    public MtfModelClient getMatchTheFollowing(@PathVariable String id) {
        return mtfService.fetchGameById(id);
    }
}
