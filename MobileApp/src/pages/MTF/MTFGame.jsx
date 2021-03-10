import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Card, Button, Modal } from 'react-bootstrap'
import happyPanda from '../MCQ/PandaHigh.gif'
import party from '../MCQ/fireworks.gif'
import sadPanda from '../MCQ/SadPanda.gif'
import './MTFGame.css'

const MTFGame = (props) => {
  let dataToBeRendered = []
  const [data, setData] = useState('')
  const [gameStart, setGameStart] = useState('not_started')
  let { id } = useParams()
  const [score, setScore] = useState(0)
  const [show, setShow] = useState(false)
  let history = useHistory()

  function checkForDuplicates(array) {
    return new Set(array).size !== array.length
  }

  const handleSubmit = (e) => {
    let tempScore = 0
    e.preventDefault()
    let solutionFields = [...document.querySelectorAll('.solutionField')]
    let solutionFieldValues = []
    solutionFields.forEach((element) => {
      solutionFieldValues.push(element.value)
    })
    if (checkForDuplicates(solutionFieldValues)) {
      setShow(true)
      setGameStart('started')
    } else {
      let key = String(data.solution)
      for (let i = 0; i < solutionFieldValues.length; i++) {
        if (solutionFieldValues[i] === key[i]) {
          tempScore = tempScore + 1
        }
      }
      setScore(tempScore)
      setGameStart('finished')
    }
  }

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://ec2-3-21-159-81.us-east-2.compute.amazonaws.com:8080/mtf/mtfGames/' + id
      ).catch((error) => {
        window.alert('Error, Please try again')
      })
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
    for (let i = 0; i < data.questionsCount; i++) {
      dataToBeRendered.push(
        <div
          className="row"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          <div className="col-5 my-4">
            <strong>{data.questions[i]}</strong>
          </div>
          <div className="col-2 my-4">
            <input
              className="solutionField"
              type="number"
              min="1"
              max={data.questionsCount}
              style={{ width: '40px' }}
              required
            />
          </div>
          <div className="col-5 my-4">
            <strong>
              {i + 1}. {data.options[i]}
            </strong>
          </div>
        </div>
      )
    }
  }

  if (gameStart === 'started') {
    return (
      <div className="root">
        <Modal
          className="my-modal"
          show={show}
          backdrop="static"
          onHide={handleClose}
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Duplicates in Solution</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <strong>Please Check Your Solution</strong>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="duplicate-modal"></div>
        <div className="container">
          <div className="row">
            <div className="col-5 mt-5" style={{ fontSize: '20px' }}>
              <strong>QUESTIONS</strong>
            </div>
            <div className="col-2"></div>
            <div className="col-5 mt-5" style={{ fontSize: '20px' }}>
              <strong>OPTIONS</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                {dataToBeRendered}
                <button
                  type="submit"
                  className="btn btn-dark btn-block"
                  style={{ marginTop: '10px' }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  style={{ marginTop: '10px' }}
                  onClick={() => {
                    props.history.push('/')
                  }}
                >
                  Go back to Games
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (gameStart === 'not_started') {
    return (
      <div className="back-image">
        <div className="container">
          <div style={{ paddingTop: '150px', height: '50%' }}>
            <Card>
              <Card.Header>
                <b>Instructions</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>{data.instructions}</Card.Text>
                <Button
                  variant="info"
                  onClick={() => {
                    setGameStart('started')
                  }}
                >
                  Start Game
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  } else {
    if (score === data.questionsCount) {
      return (
        <div className="parent">
          <img
            className="party"
            src={party}
            alt="loading..."
            width="250"
            height="250"
          />
          <img
            className="happy"
            src={happyPanda}
            alt="loading..."
            width="200"
            height="200"
          />
          <p className="score">
            <b>Well Done!!!</b>
            <br />
            You Scored: {score}/{data.questionsCount}
          </p>
          <div
            className="next-game"
            variant="dark"
            onClick={() => {
              props.history.push('/')
            }}
          >
            {' '}
            Next Game{' '}
            <span className="next-chev">
              {' '}
              <i className="fa fa-chevron-right next-chev"></i>
            </span>{' '}
          </div>
        </div>
      )
    } else {
      return (
        <div className="parent">
          <img
            className="happy"
            src={sadPanda}
            alt="loading..."
            width="200"
            height="200"
          />
          <p className="score">
            <b>You can do better!!</b>
            <br />
            You Scored: {score}/{data.questionsCount}
          </p>
          <div
            onClick={() => {
              props.history.push('/')
            }}
            className="next-game-sad"
            variant="dark"
          >
            {' '}
            Retry{' '}
            <span className="next-chev">
              {' '}
              <i className="fa fa-repeat"></i>
            </span>{' '}
          </div>
        </div>
      )
    }
  }
}

export default MTFGame
