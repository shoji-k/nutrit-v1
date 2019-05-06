import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import withTracker from './Analytics'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home'
import Bmi from './components/Bmi/Bmi'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionManager from './components/RequiredNutritionManager/RequiredNutritionManager'
import About from './components/About'

const RequiredNutritionGraph = lazy(() =>
  import('./components/RequiredNutritionGraph/RequiredNutritionGraph')
)

const NoMatch = () => <h2>Not Found</h2>

class Header extends Component {
  render() {
    return (
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <h1 style={{ margin: 0 }}>
            <Link to="/" className="uk-navbar-item uk-logo">
              Nutrit
            </Link>
          </h1>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const Main = () => (
  <div className="uk-container">
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bmi" component={Bmi} />
          <Route exact path="/nutrition" component={RequiredNutrition} />
          <Route
            exact
            path="/nutrition-manager"
            component={RequiredNutritionManager}
          />
          <Route
            exact
            path="/nutrition-graph"
            component={RequiredNutritionGraph}
          />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </div>
)

const App = withRouter(withTracker(Main))

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)

export default AppWithRouter
