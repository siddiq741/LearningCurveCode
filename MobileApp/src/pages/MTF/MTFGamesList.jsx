import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const MTFGamesList = () => {
  const [data, setData] = useState('')
  let history = useHistory()
  let dataToBeRendered = []

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://ec2-3-21-159-81.us-east-2.compute.amazonaws.com:8080/mtf/mtfGames').catch(
        (error) => {
          window.alert('Error, Please try again')
        }
      )
      let responseData = []
      if (response != null) {
        responseData = await response.json()
        setData(responseData)
      } else {
        window.alert('Error, Please try again')
      }
    }
    fetchData()
  }, [])

  if (data === '') {
    return <div></div>
  } else {
    data.forEach((element, index) => {
      dataToBeRendered.push(
        <div
          className="card text-white bg-primary mx-auto my-3"
          style={{ maxWidth: '18rem' }}
          key={element.id}
          onClick={() => {
            history.push({
              pathname: '/mtf-game/' + element.gameId,
            })
          }}
        >
          <div className="card-header">{element.gameType}</div>
          <div className="card-body">
            <h4 className="card-title">{element.name}</h4>
            <p className="card-text" style={{ fontSize: 12 }}>
              {element.gameInstruction}
            </p>
          </div>
        </div>
      )
    })
    return (
      <div className="container root" style={{ marginTop: '30px' }}>
        {dataToBeRendered}
      </div>
    )
  }
}

export default MTFGamesList
