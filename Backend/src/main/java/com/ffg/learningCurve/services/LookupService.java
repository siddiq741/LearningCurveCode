package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.*;
import com.ffg.learningCurve.database.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LookupService {
    @Autowired
    AgeGroupRepository ageGroupRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    GameTypeRepository gameTypeRepository;
    @Autowired
    LevelCategoryMapRepository leaveCategoryMapRepository;
    @Autowired
    LevelsRepository levelsRepository;

    public List<AgeGroups> getAgeGroups() {
        return ageGroupRepository.findAll();
    }

    public List<Category> getCategory() {
        return categoryRepository.findAll();
    }

    public List<GameType> getGameType() {
        return gameTypeRepository.findAll();
    }

    public List<Level> getLevels() {
        return levelsRepository.findAll();
    }

    public List<LevelCategoryMap> getMapsByAgeGroup(String ageGroupName) {return  leaveCategoryMapRepository.getLevelCategoryMapByAgeGroupName(ageGroupName);}
}
