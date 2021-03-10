package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.LevelCategoryMap;
import com.ffg.learningCurve.database.repository.LevelCategoryMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LevelCategoryMappingService {

    @Autowired
    LevelCategoryMapRepository levelCategoryMapRepository;

    public void insertMapping(LevelCategoryMap levelCategoryMap) {
        levelCategoryMapRepository.save(levelCategoryMap);
    }
}
