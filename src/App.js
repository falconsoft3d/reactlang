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


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
