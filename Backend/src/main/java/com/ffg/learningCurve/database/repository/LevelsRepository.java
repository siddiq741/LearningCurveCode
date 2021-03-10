package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.Level;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LevelsRepository extends JpaRepository<Level, Integer> {

}
