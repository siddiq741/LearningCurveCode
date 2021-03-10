import React from 'react'

const StageTwo = (props) => {
  let questionsComponent = []
  let optionsComponent = []
  let questionString
  let optionString
  let solution
  let invalid

  function checkForDuplicates(array) {
    return new Set(array).size !== array.length
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allQuestionInputs = [...document.querySelectorAll('.question')]
    const allOptionInputs = [...document.querySelectorAll('.option')]
    let questionsCount = allQuestionInputs.length

    solution = document.querySelector('#solution').value
    if (checkForDuplicates(solution) || solution.length !== questionsCount) {
      window.alert('check your solution')
    } else {
      invalid = false
      for (let i = 0; i < solution.length; i++) {
        if (solution[i] > questionsCount || solution[i] < 1) {
          invalid = true
        }
      }
      if (invalid === true) {
        window.alert('invalid solution')
      }
    }
    questionString = allQuestionInputs.reduce(
      (accumulator, item) => accumulator.concat(':' + item.value),
      ''
    )
    optionString = allOptionInputs.reduce(
      (accumulator, item) => accumulator.concat(':' + item.value),
      ''
    )
    props.data.questions = questionString
    props.data.options = optionString
    props.data.solution = solution
    props.fetchData(props.data)
    props.fetchStageTwoCheck(true)
  }

  const handleReset = () => {
    props.data.questions = ''
    props.data.answers = ''
    props.fetchStageTwoCheck(false)
  }

  for (let i = 0; i < props.questionsCount; i++) {
    questionsComponent.push(
      <div key={i} className="row" style={{ margin: '10px' }}>
        <div className="col-sm-12">
          <strong>Q{i + 1}</strong>
          <input
            type="text"
            className="question"
            style={{ margin: '3px' }}
            name={'question' + i}
            required
          />
        </div>
      </div>
    )
  }

  for (let i = 0; i < props.questionsCount; i++) {
    optionsComponent.push(
      <div key={i} className="row" style={{ margin: '10px' }}>
        <div className="col-sm-12">
          <strong>A{i + 1}</strong>
          <input
            type="text"
            className="option"
            style={{ margin: '3px' }}
            name={'option' + i}
            required
          />
        </div>
      </div>
    )
  }
  if (props.stageOneCheck) {
    if (props.questionsCount !== 0) {
      return (
        <div className="container">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h5>Stage 2/3 - Please enter questions, options & solution</h5>
              <div className="row" style={{ margin: '10px' }}>
                <div className="col-sm-12">
                  <strong>Enter Questions:</strong>
                </div>
                {questionsComponent}
              </div>
              <div className="row" style={{ margin: '10px' }}>
                <div className="col-sm-12">
                  <strong>Enter Options:</strong>
                </div>
                {optionsComponent}
              </div>
              <div className="row" style={{ margin: '10px' }}>
                <label htmlFor="solution">
                  <strong>Enter Solution:</strong>
                </label>
                <br/>
                <input id="solution" className="mx-2" type="number" required />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                style={{ margin: '5px' }}
              >
                Next
              </button>
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
  } else {
    return <div></div>
  }
}

export default StageTwo
