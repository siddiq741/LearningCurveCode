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
      gameName,
      instructions,
    }
    props.fetchData(data)
    props.fetchStageOneCheck(true)
  }

  return (
    <div>
      <h5 className="card-header text-center header ">Match the Following</h5>
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
              id="three"
              name="count"
              value="3"
              style={{ margin: '3px' }}
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              required
            />
            <label htmlFor="three">Three</label>
            <br />
            <input
              type="radio"
              id="five"
              name="count"
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              value="5"
              style={{ margin: '3px' }}
            />
            <label htmlFor="five">Five</label>
            <br />
            <input
              type="radio"
              id="seven"
              name="count"
              onClick={(event) => {
                updateQuestionsCount(event.target.value)
              }}
              value="7"
              style={{ margin: '3px' }}
            />
            <label htmlFor="seven">Seven</label>
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
