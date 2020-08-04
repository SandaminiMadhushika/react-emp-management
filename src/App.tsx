import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {addUser} from './component/models/addUser';
import {Edit} from './component/models/Edit';
import {useState} from 'react';
import {Delete} from './component/models/Delete';


function App() {
              const [isShowingedit, toggleedit] = useState(false);
              const [isShowingdelete, toggledelete] = useState(false);
    function editToggle(){
        toggleedit(true);
        toggledelete(false);

    }

    function deleteToggle(){
        toggleedit(false);
        toggledelete(true);

    }



    return (
      <div>
      <div className="App">
          <Router>
              <nav>
                  <ul>
                      <li>
                          <Link to="/adduser">Add User</Link>
                      </li>
                  </ul>
              </nav>

              <div>

                  <Switch>
              <Route exact path='/adduser' component={addUser} />
                  </Switch>
              </div>
          </Router>
          <button className="button-default" onClick={editToggle}>Edit</button>
          <Edit
              isShowingedit={isShowingedit}

          />
          <button className="button-default" onClick={deleteToggle}>Delete</button>
          <Delete
              isShowingdelete={isShowingdelete}
          />

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
