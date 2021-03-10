import React from 'react'

const StageThree = (props) => {
  const publish = async () => {
    const { count, data } = props
    const { gameName, instructions, questions, options, solution } = data
    const finalData = {
      gameName,
      count,
      instructions,
      questions,
      options,
      solution,
    }
    const response = await fetch('http://localhost:8080/mtf/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    }).catch((error) => {
      window.alert('Error, Please try again')
    })
    let responseData
    if (response != null) {
      responseData = await response.text()
      if (responseData !== 'SUCCESS') {
        window.alert('Error, Please try again')
      } else {
        window.alert('Success')
        props.updateIsCallSuccessful(true)
      }
    }
  }

  if (props.check) {
    return (
      <div className="card-body">
        <h5>Stage 3/3 - Final Confirmation</h5>
        <h6>
          <strong>Do you want to Publish the Game?</strong>
        </h6>
        <button className="btn btn-success" onClick={publish}>
          Yes
        </button>
      </div>
    )
  } else return <div></div>
}

export default StageThree
