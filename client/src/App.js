import './App.css';
import React from 'react';
import { Invite } from './features/invite/Invite'
import { Going } from './features/going/Going'
import { NotGoing } from './features/notGoing/NotGoing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Invite /></Route>
        <Route path="/api/going/"><Going /></Route>
        <Route path="/api/notgoing/"><NotGoing /></Route> 
      </Switch>
    </Router>
  )
}

export default App;
