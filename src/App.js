import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionGraph from './components/RequiredNutritionGraph/RequiredNutritionGraph'

const NoMatch = () => <h2>Not Found</h2>

const App = () => (
  <Router>
    <h1>Nutrition</h1>
    <div className="uk-container">
      <Switch>
        <Route exact path="/" component={RequiredNutrition} />
        <Route exact path="/graph" component={RequiredNutritionGraph} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App
