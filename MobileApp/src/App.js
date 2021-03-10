import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import GamesPage from './pages/GamesPage/GamesPage';
import MCQ from './pages/MCQ/MCQ';
import history from './components/History/history.js';
import MTFGamesList from './pages/MTF/MTFGamesList';
import MTFGame from './pages/MTF/MTFGame';

function App() {
  
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={GamesPage}/>
          <Route exact path = '/mcq' component={MCQ}/>
          <Route exact path = '/mtf-games-list' component={MTFGamesList}/>
          <Route exact path = '/mtf-games-list/:id' component={MTFGame}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
