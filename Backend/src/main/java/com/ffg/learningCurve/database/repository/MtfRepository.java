package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.MtfEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MtfRepository extends JpaRepository<MtfEntity, Integer> {

}
