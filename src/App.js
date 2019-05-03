import React from 'react'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import withTracker from './Analytics'
import Home from './components/Home'
import Bmi from './components/Bmi/Bmi'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionGraph from './components/RequiredNutritionGraph/RequiredNutritionGraph'

const NoMatch = () => <h2>Not Found</h2>

const Main = () => (
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
      <Route exact path="/bmi" component={Bmi} />
      <Route exact path="/nutrition" component={RequiredNutrition} />
      <Route exact path="/nutrition-graph" component={RequiredNutritionGraph} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

const App = withRouter(withTracker(Main))

const history = createBrowserHistory()

const AppWithRouter = () => (
  <Router history={history}>
    <App />
  </Router>
)

export default AppWithRouter
