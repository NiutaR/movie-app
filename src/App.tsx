import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import * as c from './components';
import { Header } from './components/Header/Header';
import { Add } from './components/Add/Add';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import './App.css';
import './libs/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/Header'>
          <Watchlist />
        </Route>
        <Route path='/watched'>
          <Watched />
        </Route> 
        <Route path='/add'>
          <Add />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
