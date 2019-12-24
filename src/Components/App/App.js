import React from 'react';
import './App.css';
import Connect from '../Connect/Connect';
import Mainpage from '../Main-page/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ContextProvider} from '../../util/Context';

function App(){

  return(
    <div>
      <ContextProvider>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" >
                <Connect />
              </Route>
              <Route path="/mainpage">
                <Mainpage />
              </Route>
            </Switch>
          </Router>
        </div>
      </ContextProvider>
    </div>
    
  );
}

export default App;
