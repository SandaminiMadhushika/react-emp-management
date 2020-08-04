import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import {addUser} from './component/models/addUser';
import {welcome} from './component/welcome';

function App() {
  return (
      <div>
      <div className="App">
          {/*<header className="App-header">*/}
          {/*</header>*/}

          <Router>
              <div>

                  <Switch>
                  <Route exact path='/' component={welcome} />
              <Route exact path='/adduser' component={addUser} />
                  </Switch>
              </div>
          </Router>
      </div>
      </div>
);
}


function About() {
    return <h2>About</h2>;
}
function Home() {
    return <h2>Homemy</h2>;
}

export default App;
