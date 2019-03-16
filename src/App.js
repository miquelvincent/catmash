import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Match from './match'
import Ranking from './ranking'
import NotFound from './notFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Match</Link>
              </li>
              <li>
                <Link to="/ranking">Ranking</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Match} />
            <Route path="/ranking" component={Ranking} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
