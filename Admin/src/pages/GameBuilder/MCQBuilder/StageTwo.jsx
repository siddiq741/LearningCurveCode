import React from 'react'

const StageTwo = (props) => {
let questionString
let optionString
let answerString
let questionsList
let optionsList
let questions = []


const handleReset = () => {
               props.fetchStageTwoCheck(false)
             }
const handleInput = (e) => {
 e.preventDefault()
const data = new FormData(e.target);
console.log(data.get('question1'));

 const allQuestionInputs = [...document.querySelectorAll('.question')]
 questionString = allQuestionInputs.reduce(
       (accumulator, item) => accumulator.concat(':' + item.value),
       ''
     )
 
 const allOption1Inputs = [...document.querySelectorAll('.option1')]
 const allOption2Inputs = [...document.querySelectorAll('.option2')]
 const allOption3Inputs = [...document.querySelectorAll('.option3')]
 const allOption4Inputs = [...document.querySelectorAll('.option4')]
 const allAnswerInputs = [...document.querySelectorAll('.answer')]


 const getOPtion = (option, object) => {

  return object.find((item) => {
    return (item.name === option) ;
      
});
}

const getAnswer = (ans) => {

  return allAnswerInputs.find((item) => {
    return (item.name === ans) ;
      
});
} 
console.log(document.querySelectorAll('.option1'));
 allQuestionInputs.map((item, index) => {
           let questionObject = {};
           
           questionObject.question =  item.value;
           questionObject.option1 = getOPtion("option1_"+ (index+1), allOption1Inputs).value;
           questionObject.option2 = getOPtion("option2_"+ (index+1), allOption2Inputs).value;
           questionObject.option3 = getOPtion("option3_"+ (index+1), allOption3Inputs).value;
           questionObject.option4 = getOPtion("option4_"+ (index+1), allOption4Inputs).value;
           questionObject.answer = getAnswer("answer"+ (index+1)).value;
          questions.push(questionObject);
            
    });

    console.log(questions);
 
  props.data.mcqquestions = questions


  console.log(props.data)

 props.fetchData(props.data)

 props.fetchStageTwoCheck(true)
}

 let stageDetails=[]
 for (let i = 0; i < props.questionsCount; i++) {
   let question = "question" + (i+1);
   let optionI = "option1_" + (i+1);
   let optionII = "option2_" + (i+1);
   let optionIII = "option3_" + (i+1);
   let optionIV = "option4_" + (i+1);
     stageDetails.push(
       <div key={i} className="row">

               <div className="col">

                 <label htmlFor="Number">Enter Question: {i+1}</label>

                 <input
                   type="text"
                   className="question"
                   name= {question}
                   style={{ margin: '3px' }}
                   required
                 />
                 <br/>
                  <label htmlFor="Number">Enter Options:</label> <br/>

                   <input type="text" className="option1" name={optionI} style={{ margin: '3px' }}
                    required  /> <br/>

                   <input type="text" className="option2" name={optionII} style={{ margin: '3px' }}
                   required  /> <br/>

                   <input type="text" className="option3" name={optionIII} style={{ margin: '3px' }}
                    required  /> <br/>

                   <input type="text" className="option4"name={optionIV}  style={{ margin: '3px' }}
                   required  /> <br/>

                  <select name={'answer' + (i+1)} id="answer" className="answer" required="required" >
                              <option value="select">select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                  </select> <br/>

               </div>
       </div>

     )
     }

 if (props.stageOneCheck) {
     if (props.questionsCount !== 0) {
       return (
       <div>
         <div className="card-body">
          <form onSubmit={handleInput} >
           <h5>Stage 2/3 - Please Enter the Questions</h5>
           {stageDetails}
           <button type="submit" className="btn btn-success"> Submit </button>

           <button
                       type="reset"
                       className="btn btn-danger"
                       onClick={handleReset}
                       style={{ margin: '5px' }}
                     >
                       Reset
                     </button>


          </form>
         </div>
     </div>
      )
    }
 }
 else {
   return (<div> </div>)
 }
 }

export default StageTwo