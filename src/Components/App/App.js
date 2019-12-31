import React from 'react';
import {ContextProvider} from '../../util/Context';
import './App.css';
import Connect from '../Connect/Connect';
import Mainpage from '../Main-page/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App(){

  return(
    <div>
      <Router>
        <Link to="/" style={{ textDecoration: 'none' }}><h1><span className="highlight">Spotif</span>API</h1></Link>
        <div className="App">
            <Switch>
              <Route exact path="/" >
                <Connect />
              </Route>
              <Route path="/mainpage">
                <ContextProvider>
                  <Mainpage />
                </ContextProvider>
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
