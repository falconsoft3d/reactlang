import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import GamePage from './pages/game/game';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/game/:name" component={GamePage} />
      </Router>
    </Layout>
  );
}

export default App;
