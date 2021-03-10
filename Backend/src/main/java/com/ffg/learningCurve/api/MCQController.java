package com.ffg.learningCurve.api;

import java.util.Optional;
import java.util.List;

import com.ffg.learningCurve.database.model.Games;
import com.ffg.learningCurve.database.model.MCQGame;
import com.ffg.learningCurve.database.model.TestTable;
import com.ffg.learningCurve.database.repository.MCQGameRepository;
import com.ffg.learningCurve.services.MCQGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("api/")
@CrossOrigin
public class MCQController {

    @Autowired
    MCQGameRepository mcqGameRepository;

    @Autowired
    MCQGameService mcqGameService;

    @PostMapping(value = "addMCQ", consumes = "application/json")
    public void setData(@RequestBody Games games) {
        mcqGameService.createMCQGame(games);
    }

    @GetMapping("/getAllMCQQuestions")
    public  List<MCQGame> getAllGames()
    {
        return mcqGameRepository.findAll();

    }

    @GetMapping("/getMCQQuesionById/{id}")
    public Optional<MCQGame> getQuestionById(@PathVariable(value = "id")Integer id)
    {
        return mcqGameRepository.findById(id);
    }

    @GetMapping("/getMCQQuesionsByGameId/{id}")
    public Games getAllQuestionOfGameById(@PathVariable(value = "id")Integer id)
    {
        return mcqGameService.getGameDataById(id);
    }

    @PostMapping("/addMCQQuestion")
    public MCQGame addGame(@RequestBody MCQGame mcqGame)
    {
        return mcqGameRepository.save(mcqGame);
    }

    @PutMapping("/updateMCQQuestionById/{id}")
    public MCQGame updateMCQQuestion(@PathVariable(value = "id")Integer id,@RequestBody MCQGame mcqGamedetails)
    {
        Optional<MCQGame> mcqGame=mcqGameRepository.findById(id);
        MCQGame newMCQGame=mcqGame.get();
        newMCQGame.setQuestionId(mcqGamedetails.getQuestionId());
        newMCQGame.setGameId(mcqGamedetails.getGameId());
        newMCQGame.setQuestion(mcqGamedetails.getQuestion());
        newMCQGame.setOption1(mcqGamedetails.getOption1());
        newMCQGame.setOption2(mcqGamedetails.getOption2());
        newMCQGame.setOption3(mcqGamedetails.getOption3());
        newMCQGame.setOption4(mcqGamedetails.getOption4());
        newMCQGame.setAnswer(mcqGamedetails.getAnswer());

        return mcqGameRepository.save(newMCQGame);


    }

    @DeleteMapping("/deleteMCQQuestion/{id}")
    public void deleteQuestion(@PathVariable(value = "id")Integer id)
    {
        Optional<MCQGame> mcqGame=mcqGameRepository.findById(id);
        MCQGame newMCQGame=mcqGame.get();
        mcqGameRepository.delete(newMCQGame);
    }
}
