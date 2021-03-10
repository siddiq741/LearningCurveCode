package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.GameType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameTypeRepository extends JpaRepository<GameType,Integer> {
}
