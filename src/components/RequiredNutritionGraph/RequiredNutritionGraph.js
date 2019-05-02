import React from 'react'
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { nutritionData } from '../RequiredNutrition/constants'

const maleColor = '#8884d8'
const femaleColor = '#d88884'

let graphData = []
nutritionData.forEach(one => {
  one.ages.forEach(age => {
    const obj = {
      age: age,
      energy_male: one.male.energy,
      protein_male: one.male.protein,
      energy_female: one.female.energy,
      protein_female: one.female.protein,
      fat_male: one.male.fat,
      fat_female: one.female.fat,
      saturatdFattyAsid_male: one.male.saturatdFattyAsid,
      saturatdFattyAsid_female: one.female.saturatdFattyAsid,
      nSixFattyAcid_male: one.male.nSixFattyAcid,
      nSixFattyAcid_female: one.female.nSixFattyAcid,
      nThreeFattyAcid_male: one.male.nThreeFattyAcid,
      nThreeFattyAcid_female: one.female.nThreeFattyAcid,
      carbohydrate_male: one.male.carbohydrate,
      carbohydrate_female: one.female.carbohydrate,
      fiber_male: one.male.fiber,
      fiber_female: one.female.fiber,
    }
    graphData.push(obj)
  })
})

const XAgeAxis = () => (
  <XAxis dataKey="age">
    <Label value="年齢" offset={-12} position="insideBottom" />
  </XAxis>
)

const RequiredNutritionGraph = () => (
  <div className="uk-grid">
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>エネルギー</h3>
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
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>たんぱく質 推定平均必要量</h3>
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
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>脂質 目標値(中央値)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.fat_male,
            female: d.fat_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>飽和脂肪酸 最大値</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.saturatdFattyAsid_male,
            female: d.saturatdFattyAsid_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>N-6系脂肪酸 目安量</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.nSixFattyAcid_male,
            female: d.nSixFattyAcid_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>N-3系脂肪酸 目安量</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.nThreeFattyAcid_male,
            female: d.nThreeFattyAcid_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>炭水化物 目標量</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.carbohydrate_male,
            female: d.carbohydrate_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="uk-width-1-1 uk-width-1-2@m">
      <h3>食物繊維 最小量</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={graphData.map(d => ({
            age: d.age,
            male: d.fiber_male,
            female: d.fiber_female,
          }))}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line type="monotone" dataKey="male" stroke={maleColor} />
          <Line type="monotone" dataKey="female" stroke={femaleColor} />
          <CartesianGrid stroke="#ccc" />
          {XAgeAxis()}
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default RequiredNutritionGraph
