package com.ffg.learningCurve.database.repository;



import com.ffg.learningCurve.database.model.MCQGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MCQGameRepository extends JpaRepository<MCQGame, Integer>{

    @Query(value = "SELECT * FROM mcq_game WHERE GAME_ID = :id", nativeQuery = true)
    List<MCQGame> getQuestionsByMCQGameId(@Param("id") int id);

    @Query(value = "SELECT * FROM mcq_game WHERE GAME_ID = :gameId AND QUESTION_ID = :questionId", nativeQuery = true)
    List<MCQGame> getQuestionByBothId(@Param("gameId") int gameId, @Param("questionId") int questionId);

}