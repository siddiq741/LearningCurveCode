package com.ffg.learningCurve.database.repository;

import com.ffg.learningCurve.database.model.TestTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestTableRepository extends JpaRepository<TestTable,Integer> {
}
