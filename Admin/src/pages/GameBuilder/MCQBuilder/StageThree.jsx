import React from 'react'

const StageThree = (props) => {
  const publish = async () => {
    const { count, data } = props
    const { name, instructions, mcqquestions } = data
    const finalData = {
      name,
      instructions,
      mcqquestions
      
    }
    console.log(finalData);
    const response = await fetch('http://localhost:8080/api/addMCQ', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
      
    })
    console.log(response.ok);
    let responseData
    if (!response.ok) {
      responseData = await response.text()
      
        window.alert('Error, Please try again')
      
    } else {
      window.alert('Success')
      props.updateIsCallSuccessful(true)
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
