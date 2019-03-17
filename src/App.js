import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mash from './mash'
import Ranking from './ranking'
import NotFound from './notFound'

const App = () => (
  <>
    <div className="background" />
    <Router>
      <Switch>
        <Route path="/" exact component={Mash} />
        <Route path="/ranking" component={Ranking} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)

export default App
