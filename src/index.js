import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App/App.js';
import PAP from './components/PAP/PAP.js';
import Zip from './components/Questions/Zip.js';
import Race from './components/Questions/Race.js';
import Division from './components/Questions/Division.js';
import Symptoms from './components/Questions/Symptoms.js';
import MobileLanding from './components/Landing/MobileLanding.js';
import MobileWindow from './components/Window/MobileWindow.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

/**
ReactDOM.render(<Router> <Route , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
**/


ReactDOM.render(
    <Router>
      <div>
        
          
        <Link to="/">Home  </Link>
            
        <Link to="/zip">Zip  </Link>
            
        <Link to="/race">Race  </Link>

        <Link to="/division">Division  </Link>

        <Link to="/symptoms">Symptoms  </Link>

        <Link to="/landing">Landing  </Link>

        <Link to="/window">Window</Link>
          
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/zip">
                <Zip />
            </Route>
            <Route path="/race">
                <Race />
            </Route>
            <Route path="/division">
                <Division />
            </Route>
            <Route path="/symptoms">
                <Symptoms />
            </Route>
            <Route path="/landing">
                <MobileLanding />
            </Route>
            <Route path="/window">
                <MobileWindow />
            </Route>

            <Route path="/">
                <PAP />
            </Route>
        </Switch>
      </div>
    </Router>,
    document.getElementById('root'));
 
 function Winder() {
    return <Redirect to="/window" />
 }