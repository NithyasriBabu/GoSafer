import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginSection from './components/LoginSection';
import HomePage from './components/HomePage';
import FinancialPlanning from './components/FinancialPlanning';
import Budget from './components/Budget';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/login"> <LoginSection /></Route>
        <Route exact path="/home"> <HomePage /></Route>
        <Route exact path="/financialplanning"> <FinancialPlanning /></Route>
        <Route exact path="/Budget"> <Budget /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
