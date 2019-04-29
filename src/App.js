import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionGraph from './components/RequiredNutritionGraph/RequiredNutritionGraph'

const NoMatch = () => <h2>Not Found</h2>

const App = () => (
  <Router>
    <h1>
      <Link to="/">Nutrit</Link>
    </h1>
    <div className="uk-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nutrition" component={RequiredNutrition} />
        <Route
          exact
          path="/nutrition-graph"
          component={RequiredNutritionGraph}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App
