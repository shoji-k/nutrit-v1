import React from 'react'

const List = ({ data }) => {
  return (
    <table className="uk-table uk-table-divider">
      <tbody>
        <tr>
          <th>エネルギー</th>
          <td>{data.energy} kcal/day</td>
        </tr>
        <tr>
          <th>たんぱく質</th>
          <td>{data.protein} g/day</td>
        </tr>
      </tbody>
    </table>
  )
}

export default List
