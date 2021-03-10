package com.ffg.learningCurve.api;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.TestTable;
import com.ffg.learningCurve.services.FallingBubblesService;
import com.ffg.learningCurve.services.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class TestController {

    @Autowired
    TestService testService;


    @GetMapping("test")
    public List<TestTable> getData() {
        return testService.getData();
    }




}
