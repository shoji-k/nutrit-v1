import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { nutritionData } from '../RequiredNutrition/constants'

let graphData = []
nutritionData.forEach(one => {
  one.ages.forEach(age => {
    const obj = {
      age: age,
      energy_male: one.male.energy,
      protein_male: one.male.protein,
      energy_female: one.female.energy,
      protein_female: one.female.protein,
    }
    graphData.push(obj)
  })
})

const RequiredNutritionGraph = () => (
  <div className="uk-grid">
    <div className="uk-width-1-1 uk-width-1-2@m">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.energy_male,
            female: d.energy_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke="#8884d8" />
          <Line type="monotone" dataKey="female" stroke="#cc3" />
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="age"
            label={{ value: 'age', position: 'insideBottomRight', offset: 0 }}
          />
          <YAxis
            label={{ value: 'Energy', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.protein_male,
            female: d.protein_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke="#8884d8" />
          <Line type="monotone" dataKey="female" stroke="#cc3" />
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="age"
            label={{ value: 'age', position: 'insideBottomRight', offset: 0 }}
          />
          <YAxis
            label={{ value: 'Protein', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default RequiredNutritionGraph
