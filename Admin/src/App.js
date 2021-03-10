import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import AccessRequest from './pages/AccessRequest/AccessRequest';
import Home from './pages/Home/Home';
import About from './pages/About';
import ManageAccess from './pages/ManageAccess/ManageAccess';
import Matching from './pages/GameBuilder/Matching/Matching';
import MCQBuilder from './pages/GameBuilder/MCQBuilder/MCQBuilder'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/login' component={Login}/>
          <Route  path = '/about' component={About}/>
          <Route  path = '/access-request' component={AccessRequest} />
          <Route  path = '/manage-access' component={ManageAccess}/>
          <Route  path = '/create-mtf' component={Matching}/>
          <Route  path = '/create-mcq' component={MCQBuilder}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
