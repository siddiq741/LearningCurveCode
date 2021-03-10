package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.*;
import com.ffg.learningCurve.services.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/get/")

public class LookupController {

    @Autowired
    LookupService lookupService;

    @GetMapping("ageGroups")
    public List<AgeGroups> getAgeGroups() {
        return lookupService.getAgeGroups();
    }

    @GetMapping("category")
    public List<Category> getCategory() {
        return lookupService.getCategory();
    }

    @GetMapping("gameTypes")
    public List<GameType> getGameType() {
        return lookupService.getGameType();
    }

    @GetMapping("levels")
    public List<Level> getLevels() {
        return lookupService.getLevels();
    }

    @GetMapping("levelCategoryMap/{ageGroupName}")
    public List<LevelCategoryMap> getGameType(@PathVariable("ageGroupName") String ageGroupName) {
        return lookupService.getMapsByAgeGroup(ageGroupName);
    }
}
