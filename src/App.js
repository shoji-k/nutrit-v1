import React, { Component } from 'react'

class RequiredAmountList extends Component {
  render() {
    return (
      <dl>
        <dt>Energy</dt>
        <dd>2650 kcal/day</dd>
      </dl>
    )
  }
}

const App = () => (
  <div className="uk-container">
    <h1>Nutrition</h1>
    <RequiredAmountList />
  </div>
)

export default App
