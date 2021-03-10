package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import com.ffg.learningCurve.database.model.LevelCategoryMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LevelCategoryMapRepository extends JpaRepository<LevelCategoryMap, Integer> {

    @Query(value = "SELECT * FROM level_category_map WHERE AGE_GRP_NM = :ageGroupName", nativeQuery = true)
    List<LevelCategoryMap> getLevelCategoryMapByAgeGroupName(@Param("ageGroupName") String ageGroupName);
}
