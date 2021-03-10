import React from 'react'

const StageOne = (props) => {
  let data

  let gameName = ''

  let instructions = ''

  const updateQuestionsCount = (value) => {
    props.fetchQuestionsCount(value)
  }

  const handleReset = (e) => {
    props.fetchData('')
    props.fetchQuestionsCount(0)
    props.fetchStageOneCheck(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    gameName = document.querySelector('#gameName').value
    instructions = document.querySelector('#gameInstruction').value
    data = {
     
      instructions,
    }
    data.name = gameName
    props.fetchData(data)
    props.fetchStageOneCheck(true)
  }

  return (
    <div>
      <h5 className="card-header text-center header ">Multiple Choice Questions</h5>
      <div className="card-body">
        <form onReset={handleReset} onSubmit={handleSubmit}>
          <h5>Stage 1/3 - Please enter the details</h5>
          <label
            htmlFor="gameName"
            style={{
              marginTop: '20px',
            }}
          >
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            name="gameName"
            id="gameName"
            required
            placeholder="Enter Name"
            style={{
              marginLeft: '10px',
            }}
          />
          <div
            className="radio-section"
            style={{
              marginTop: '20px',
            }}
          >
            <p><strong>Select the number of questions:</strong></p>
            <input
              type="radio"
              id="four"
              name="count"
              value="4"
              style={{ margin: '3px' }}
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              required
            />
            <label htmlFor="four">Four</label>
            <br />
            <input
              type="radio"
              id="six"
              name="count"
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              value="6"
              style={{ margin: '3px' }}
            />
            <label htmlFor="six">Six</label>
            <br />
            <input
              type="radio"
              id="eight"
              name="count"
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              value="8"
              style={{ margin: '3px' }}
            />
            <label htmlFor="eight">Eight</label>
            <br/>
            <input
                         type="radio"
                          id="ten"
                          name="count"
                          onClick={(event) => {
                            updateQuestionsCount(event.target.value)
                          }}
                          value="10"
                          style={{ margin: '3px' }}
                        />
                        <label htmlFor="ten">Ten</label>
          </div>
          <label
            htmlFor="gameInstruction"
            style={{
              marginTop: '20px',
            }}
          >
          <strong>
            Instructions:
          </strong>
          </label>
          <br />
          <input
            type="text"
            name="gameInstruction"
            id="gameInstruction"
            required
            placeholder="Enter the instructions"
            style={{ marginTop: '10px', marginBottom: '20px', width: '60%' }}
          />

          <br />
          <div>
            <button type="submit" className="btn btn-success mr-3">
              Next
            </button>
            <button type="reset" className="btn btn-danger">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StageOne