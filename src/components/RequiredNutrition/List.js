import React from 'react'
import { roundNumber } from '../../utils'

const fatPercentToGram = (energy, percent) => {
  // 脂質量 x グラム×9キロカロリー(脂質1g = 9kcal)÷総エネルギー energy キロカロリー×100 = 脂肪エネルギー比率（percent）
  // x = percent * energy / 9 / 100
  return roundNumber((percent * energy) / 9 / 100, 1)
}

const List = ({ data }) => {
  return (
    <table className="uk-table uk-table-divider">
      <tbody>
        <tr>
          <th colSpan="2">
            エネルギー
            <br />
            <small>身体活動レベル: ふつう</small>
          </th>
          <td>{data.energy} kcal</td>
        </tr>
        <tr>
          <th colSpan="2">
            たんぱく質
            <br />
            <small>推定平均必要量</small>
          </th>
          <td>{data.protein} g</td>
        </tr>
        <tr>
          <th rowSpan="4" style={{ verticalAlign: 'middle' }}>
            脂質
          </th>
          <th>
            脂質
            <br />
            <small>目標値 中央値</small>
          </th>
          <td>
            {data.fat} %エネルギー
            <br />
            {fatPercentToGram(data.energy, data.fat)} g
          </td>
        </tr>
        <tr>
          <th>
            飽和脂肪酸
            <br />
            <small>最大値</small>
          </th>
          <td>
            {data.saturatdFattyAsid} %エネルギー
            <br />
            {fatPercentToGram(data.energy, data.saturatdFattyAsid)} g
          </td>
        </tr>
        <tr>
          <th>
            n-6系脂肪酸
            <br />
            <small>目安量</small>
          </th>
          <td>{data.nSixFattyAcid} g</td>
        </tr>
        <tr>
          <th>
            n-3系脂肪酸
            <br />
            <small>目安量</small>
          </th>
          <td>{data.nThreeFattyAcid} g</td>
        </tr>
        <tr>
          <th rowSpan="2" style={{ verticalAlign: 'middle' }}>
            炭水化物
          </th>
          <th>
            炭水化物
            <br />
            <small>目標量</small>
          </th>
          <td>{data.carbohydrate} g</td>
        </tr>
        <tr>
          <th>
            食物繊維
            <br />
            <small>最小量</small>
          </th>
          <td>{data.fiber} g</td>
        </tr>
      </tbody>
    </table>
  )
}

export default List
