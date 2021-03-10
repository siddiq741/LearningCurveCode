package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.AgeGroups;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgeGroupRepository extends JpaRepository<AgeGroups,Integer> {
}
