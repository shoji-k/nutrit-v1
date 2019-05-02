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
import { getNutritionData } from '../RequiredNutrition/constants'

const maleColor = '#8884d8'
const femaleColor = '#d88884'

let graphData = []
getNutritionData(2).forEach(one => {
  one.ages.forEach(age => {
    const obj = {
      age: age,
      energy_low_male: one.male.energyLow,
      energy_middle_male: one.male.energyMiddle,
      energy_high_male: one.male.energyHigh,
      energy_low_female: one.female.energyLow,
      energy_middle_female: one.female.energyMiddle,
      energy_high_female: one.female.energyHigh,
      protein_male: one.male.protein,
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
          data={graphData}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <Line
            type="monotone"
            dataKey="energy_low_male"
            name="男性 身体活動レベル 低い"
            stroke={'#6159ea'}
          />
          <Line
            type="monotone"
            dataKey="energy_middle_male"
            name="男性 身体活動レベル ふつう"
            stroke={'#7471b9'}
          />
          <Line
            type="monotone"
            dataKey="energy_high_male"
            name="男性 身体活動レベル 高い"
            stroke={maleColor}
          />
          <Line
            type="monotone"
            dataKey="energy_low_female"
            name="女性 身体活動レベル 低い"
            stroke={'#9a615e'}
          />
          <Line
            type="monotone"
            dataKey="energy_middle_female"
            name="女性 身体活動レベル ふつう"
            stroke={'#b97471'}
          />
          <Line
            type="monotone"
            dataKey="energy_high_female"
            name="女性 身体活動レベル 高い"
            stroke={femaleColor}
          />
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
