package com.ffg.learningCurve.services;

import com.ffg.learningCurve.database.model.TestTable;
import com.ffg.learningCurve.database.repository.TestTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @Autowired
    TestTableRepository testTableRepository;

    public List<TestTable> getData() {
        return  testTableRepository.findAll();
    }


}
