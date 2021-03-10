package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.FallingBubblesQuestions;
import com.ffg.learningCurve.database.model.FallingBubblesQuestionsPK;
import com.ffg.learningCurve.database.model.Games;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FallingBubblesQuestionsRepository extends JpaRepository<FallingBubblesQuestions, Integer> {

    @Query(value = "SELECT * FROM fb_questions WHERE GAME_ID = :id", nativeQuery = true)
    List<FallingBubblesQuestions> getQuestionsByGameId(@Param("id") int id);
}
