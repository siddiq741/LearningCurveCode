import { Component } from "react";
import React from 'react';
import './MCQ.css'
import {Card, Button, Table} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import tap from './tap.wav';
import triumph from './level.wav';
import startGame from './startGame.wav';
import failure from './sad_trombone.mp3';
import emoji from './PandaHigh.gif';
import party from './fireworks.gif';
import sad from './SadPanda2.gif';
import { getDataAsync } from '../../api/CRUD.js';

 class MCQ extends Component {

    constructor(props) {
        super(props);
        this.state ={
            instructions: null,
            questions: [],
            currentQuestion: {},
            currentQuestionIndex: null,
            isFirstQuestion: false,
            isLastQuestion: false,
            gameName: null,
            progress: null,
            selectedAnswer:0,
            userAnswers:[],
            score: 0,
            //gameStates - UNINITIATED,ONGOING,SUCCESS,FAILURE
            gameState:'UNINITIATED'
        }
    }

    componentDidMount() {
        //  const data = require('./MCQ_JSON.json');
        const id = this.props.location.state;
        getDataAsync('api/getMCQQuesionsByGameId/'+id).then(data => {
        this.setState({instructions: data.instructions, questions: data.mcqquestions, gameName: data.name});
        }); 
    }

    calculateScoreAndSetResult = () => {
        let tempScore = 0;
        let sad = new Audio(failure);
        let happy = new Audio(triumph);
        for(let i=0;i<this.state.questions.length;i++){
            if(this.state.userAnswers[i] === this.state.questions[i].answer)
            tempScore++;
        }
        this.setState({
            score:tempScore
        },()=>{
            if(this.state.score >= this.state.questions.length/2){
                happy.play();
                this.setState({
                    gameState:'SUCCESS'
                })
            }else{
                sad.play();
                this.setState({
                    gameState:'FAILURE'
                })
            }
        })
    }

    setAnswer = (index,value) => {
        let snd = new Audio(tap);
        snd.play();
        if(!this.state.userAnswers[index]){
            let tempAnswers = [...this.state.userAnswers];
            tempAnswers.push(value);
            this.setState({
                userAnswers:tempAnswers
            })
        }else{
            let tempAnswers = [...this.state.userAnswers];
            tempAnswers[index] = value;
            this.setState({
                userAnswers:tempAnswers
            })
        }
    }

    resetGame = () =>{
        this.setState({
            instructions: null,
            questions: [],
            currentQuestion: {},
            currentQuestionIndex: null,
            isFirstQuestion: false,
            isLastQuestion: false,
            gameName: null,
            progress: null,
            selectedAnswer:0,
            userAnswers:[],
            score: 0,
            //gameStates - UNINITIATED,ONGOING,SUCCESS,FAILURE
            gameState:'UNINITIATED'
        })
        this.componentDidMount();
    }

    onClickNext = () => {
        console.log('inside');
        let index = this.state.currentQuestionIndex;
        let questions = this.state.questions;
        let prevQuestion = this.state.currentQuestion;
        let length = this.state.questions.length;
        questions[index] = prevQuestion;
        console.log(questions);
        index = index+1;
        this.getProgress(index,length);
        const nextQuestion = this.state.questions[index];
        this.setState({currentQuestionIndex: index, questions: questions, isFirstQuestion: index === 0,
            currentQuestion: nextQuestion, isLastQuestion: index+1 === length});
    }


    getProgress = (index, length) => {
        let progress = Math.round((index+1)*100/length);
        this.setState({progress: progress});

    }

    onClickPrev = () => {
        let index = this.state.currentQuestionIndex;
        let length = this.state.questions.length;
        let questions = this.state.questions;
        let nextQuestion = this.state.currentQuestion;
        questions[index] = nextQuestion;
        index = index-1;
        this.getProgress(index,length);
        const prevQuestion = this.state.questions[index];
        this.setState({currentQuestionIndex: index, currentQuestion: prevQuestion, isFirstQuestion: index === 0, isLastQuestion: index+1 === length});
        
    }


    startGame = () => {
        let snd = new Audio(startGame);
        snd.play();
        let firstQuestion = this.state.questions[0];
        this.setState({startGame: true, currentQuestion: firstQuestion, isFirstQuestion: true, currentQuestionIndex: 0, gameState:'ONGOING'});
    }

     
    submitGame = ()=>{
        this.calculateScoreAndSetResult();
    }

    render() {
        const currQuestion = this.state.currentQuestion;
        const index = this.state.currentQuestionIndex;
        return (
           <div style={{height: '100%'}}>
            {this.state.gameState  === 'UNINITIATED' ?
            //Instruction Page /Start Page
            <div className='back-image'>
                <div className = "container">
                    <div style={{paddingTop: '150px', height: '50%'}}>
                            <Card>
                            <Card.Header><b>Instructions</b></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                {this.state.instructions}
                                </Card.Text>
                                <Button variant="info" onClick={this.startGame}>Start Game</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div> : 
            this.state.gameState  === 'ONGOING' ?
            <div className='d-flex flex-column justify-content-center game'>
                <div style={{color: 'white', fontWeight: 'bold'}}>
                  <h4> {this.state.gameName} </h4> 
                </div>
                <br/>
                <div>
                <ProgressBar variant="warning" animated now={this.state.progress} className='progress'/>
                </div>
                <div></div>
                <br/>
                <br/>
                <div>
                <Table borderless="true">
                <thead>
                        <tr>
                        <th style={{color: 'white', fontSize: '25px'}}>{index+1}.{currQuestion.question}</th>
                        </tr>
                    </thead>
                </Table>
                </div>
                
                <div>
                <Table borderedless='true'>
                    <tr>
                        <td style={{border:'none'}}>
                        <Button onClick = {()=>this.setAnswer(index,1)} className='btn-text' variant={this.state.userAnswers[index]=== 1?'info':'warning'} size="lg" block>
                        {currQuestion.option1}
                        </Button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{border:'none'}}>
                        <Button onClick = {()=>this.setAnswer(index,2)} className='btn-text' variant={this.state.userAnswers[index]=== 2?'info':'warning'} size="lg" block>
                        {currQuestion.option2}
                        </Button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{border:'none'}}>
                        <Button onClick = {()=>this.setAnswer(index,3)} className='btn-text' variant={this.state.userAnswers[index]=== 3?'info':'warning'} size="lg" block>
                        {currQuestion.option3}
                        </Button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{border:'none'}} >
                        <Button onClick = {()=>this.setAnswer(index,4)} className='btn-text' variant={this.state.userAnswers[index]=== 4?'info':'warning'} size="lg" block>
                        {currQuestion.option4}
                        </Button>
                        </td>
                    </tr>
                    
                </Table>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    {!this.state.isFirstQuestion ? 
                    <div>
                    <span style={{width: '150x', cursor: 'pointer', display: 'block',color: 'yellow',marginLeft: '10px'}} onClick={this.onClickPrev}><i className="fa fa-chevron-circle-left fa-2x" ></i></span>
                    </div>
                    : <div></div> }
                    {!this.state.isLastQuestion ?
                    <div>
                    <span  style={{width: '150x', cursor: 'pointer', display: 'block',marginRight: '10px'}}  className = {!this.state.userAnswers[index]?'disabled-link':'yellow'} onClick={this.onClickNext}><i  className="fa fa-chevron-circle-right fa-2x" ></i></span>
                    </div>
                    : <div></div>}     
                     {this.state.isLastQuestion ?
                    <div className = 'submit'>
                        <Button onClick = {this.submitGame} className = {!this.state.userAnswers[index]?'disabled-link':''} variant = {!this.state.userAnswers[index]?'secondary':'danger'} >Submit Game</Button>
                     </div>
                    : null} 
                </div>     
                    
            </div>
            :
            this.state.gameState === 'SUCCESS' ?(
                <div className='parent'>
                    <img  className='party' src={party} alt="loading..." width="250" height="250" />
                    <img className='happy'src={emoji} alt="loading..." width="200" height="200" />     
                    <p className='score'><b>Well Done!!!</b><br/>You Scored: {this.state.score} / 4</p> 
                    <div className='next-game' variant = 'dark' onClick = {() => {this.props.history.push('/')}}> Next Game <span className='next-chev'> <i  className="fa fa-chevron-right next-chev" ></i></span> </div>      
                </div>
                ): 
            this.state.gameState === 'FAILURE' ?(
                <div className='parent'>
                    <img className='sad'src={sad} alt="loading..." />     
                    <p className='score-sad'><b>Need a little more work here ...</b><br/>You Scored: {this.state.score} / 4</p> 
                    <div onClick = {this.resetGame} className='next-game-sad' variant = 'dark' > Retry <span className='next-chev'> <i  className="fa fa-repeat" ></i></span> </div>      
                </div>
                ):null
            }
           </div>  
        );
    }
 }

 export default MCQ;