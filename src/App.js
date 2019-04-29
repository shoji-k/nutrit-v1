import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionGraph from './components/RequiredNutritionGraph/RequiredNutritionGraph'

const NoMatch = () => <h2>Not Found</h2>

const App = () => (
  <Router>
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <h1 style={{ margin: 0 }}>
            <Link to="/" className="uk-navbar-item uk-logo">
              Nutrit
            </Link>
          </h1>
        </div>
      </nav>

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
