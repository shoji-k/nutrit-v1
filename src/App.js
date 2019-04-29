import React from 'react'
import RequiredNutrition from './components/RequiredNutrition/RequiredNutrition'
import RequiredNutritionGraph from './components/RequiredNutritionGraph/RequiredNutritionGraph'

const App = () => (
  <div className="uk-container">
    <h1>Nutrition</h1>
    <RequiredNutrition />
    <RequiredNutritionGraph />
  </div>
)

export default App
