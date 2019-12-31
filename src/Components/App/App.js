import React from 'react';
import {ContextProvider} from '../../util/Context';
import './App.css';
import Connect from '../Connect/Connect';
import Mainpage from '../Main-page/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){

  return(
    <div>
        <h1><span className="highlight">Spotif</span>API</h1>
        <div className="App">
          <Router>
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
          </Router>
        </div>
    </div>
    
  );
}

export default App;
