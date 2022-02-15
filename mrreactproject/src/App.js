import './App.css';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'
import Home from './Pages/Home';
import Game from './Pages/Game';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar/>
          <Switch>
              <Route path='/' exact component={ Home }/>
              <Route path='/Game' exact component={ Game }/>
          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App;
