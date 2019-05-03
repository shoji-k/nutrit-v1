import React, { Suspense, lazy } from 'react'
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
const RequiredNutritionGraph = lazy(() =>
  import('./components/RequiredNutritionGraph/RequiredNutritionGraph')
)

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

    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bmi" component={Bmi} />
          <Route exact path="/nutrition" component={RequiredNutrition} />
          <Route
            exact
            path="/nutrition-graph"
            component={RequiredNutritionGraph}
          />
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
