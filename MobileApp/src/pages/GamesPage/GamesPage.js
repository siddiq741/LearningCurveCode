import { Component } from 'react'
import React from 'react'
import './GamesPage.css'
import { Card, Image } from 'react-bootstrap'
import match from './match.png'
import mcq from './mcq.png'
import { getDataAsync } from '../../api/CRUD.js'

class GamesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
    this.showGames = this.showGames.bind(this)
    this.getRow = this.getRow.bind(this)
    this.onGameClick = this.onGameClick.bind(this)
    this.images = [
      { gameType: 'MCQ', color: '#33b54d', image: mcq },
      { gameType: 'Match the Following', color: '#f2d633', image: match },
    ]
  }

  componentDidMount() {
    getDataAsync('api/getAllGames').then((data) =>
      this.setState({ games: data })
    )
  }

  showGames() {
    let rows = []
    for (let i = 0; i < this.state.games.length; i++) {
      rows.push(this.getRow(i))
    }
    return rows
  }

  onGameClick(gameType, gameId) {
    if (gameType === 'MCQ') {
      this.props.history.push('/mcq', gameId)
    }
    if (gameType === 'Match the Following') {
      this.props.history.push('/mtf-games-list/' + gameId)
    }
  }

  getRow(i) {
    let color = null
    let image = null
    this.images.map((item) => {
      if (this.state.games[i].gameType === item.gameType) {
        color = item.color
        image = item.image
      }
    })

    return (
      <div style={{ marginTop: '50px' }}>
        <Card
          style={{ borderRadius: '40px', backgroundColor: color }}
          onClick={() =>
            this.onGameClick(
              this.state.games[i].gameType,
              this.state.games[i].gameId
            )
          }
        >
          <div className="d-flex flex-row">
            <div>
              <Image
                src={image}
                roundedCircle
                style={{ width: 80, height: 80, marginLeft: '0px' }}
              />
            </div>
            <div
              style={{
                color: 'whilte',
                fontWeight: 'bold',
                marginLeft: '20px',
                marginTop: 20,
                flexWrap: 'wrap',
                alignContent: 'flex-start',
              }}
            >
              <h5 style={{ color: 'white' }}> {this.state.games[i].name} </h5>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  render() {
    let rows = this.showGames()
    return (
      <div style={{ height: '100%' }} className="back">
        <div>
          <div
            style={{ color: 'white', fontWeight: 'bold', paddingTop: '20px' }}
          >
            <h4> GAMES </h4>
          </div>
          <div
            className="d-flex flex-column  justify-content-between"
            style={{ padding: '10px' }}
          >
            {rows}
          </div>
        </div>
      </div>
    )
  }
}

export default GamesPage
