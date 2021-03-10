package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.LevelCategoryMap;
import com.ffg.learningCurve.services.LevelCategoryMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class LevelCategoryMappingController {

    @Autowired
    LevelCategoryMappingService levelCategoryMappingService;

    @PostMapping(value = "insertMapping", consumes = "application/json")
    public void setData(@RequestBody LevelCategoryMap levelCategoryMap) {
        levelCategoryMappingService.insertMapping(levelCategoryMap);
    }
}
