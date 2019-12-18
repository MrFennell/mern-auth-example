import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
              <Landing/>
          </Route>
          <Route exact path="/register">
              <Register />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
