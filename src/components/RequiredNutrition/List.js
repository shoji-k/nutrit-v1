import React from 'react'

const List = ({ data }) => {
  return (
    <table className="uk-table uk-table-divider">
      <tbody>
        <tr>
          <th colSpan="2">エネルギー</th>
          <td>{data.energy} kcal/day</td>
        </tr>
        <tr>
          <th colSpan="2"> たんぱく質</th>
          <td>{data.protein} g/day</td>
        </tr>
        <tr>
          <th rowSpan="4" style={{ verticalAlign: 'middle' }}>
            脂質
          </th>
          <th>脂質</th>
          <td>{data.fat} %エネルギー</td>
        </tr>
        <tr>
          <th>飽和脂肪酸</th>
          <td>{data.fat} %エネルギー</td>
        </tr>
        <tr>
          <th>n-6 系脂肪酸</th>
          <td>{data.nSixFattyAcid} g/day</td>
        </tr>
        <tr>
          <th>n-3 系脂肪酸</th>
          <td>{data.nThreeFattyAcid} g/day</td>
        </tr>
        <tr>
          <th rowSpan="2" style={{ verticalAlign: 'middle' }}>
            炭水化物
          </th>
          <th>炭水化物</th>
          <td>{data.carbohydrate} g/day</td>
        </tr>
        <tr>
          <th>食物繊維</th>
          <td>{data.carbohydrate} g/day</td>
        </tr>
      </tbody>
    </table>
  )
}

export default List
