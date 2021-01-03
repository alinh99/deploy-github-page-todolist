import React from 'react';
import './App.css';
import AccountAction from './containers/AccountAction/AccountAction';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { createBrowserHistory } from "history";
import history from './history/history';

function App() {

  return (
    <Router history={history}>
      <div className="App">
          <Switch>
            <Route path="/account" component={AccountAction} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
    </Router>
  );

}



export default App;
