package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.FallingBubblesOptions;
import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FallingBubblesOptionsRepository extends JpaRepository<FallingBubblesOptions, Integer> {

    @Query(value = "SELECT * FROM fb_options WHERE GAME_ID = :gameId AND Q_ID = :questionId", nativeQuery = true)
    List<FallingBubblesOptions> getOptionsByGameAndQuestionId(@Param("gameId") int gameId,@Param("questionId") int questionId);
}
