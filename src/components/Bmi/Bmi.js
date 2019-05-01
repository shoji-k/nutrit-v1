import React, { Component, Fragment } from 'react'
import Form from './Form'

const isNumber = n => typeof n === 'number' && isFinite(n)
const isNaturalNumber = n => isNumber(n) && n > 0
const roundNumber = (n, precise) => {
  const ratio = Math.pow(10, precise)
  return Math.round(n * ratio) / 100
}

class Bmi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 173,
      weight: 65,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculateBmi = () => {
    let { height, weight } = this.state

    height = parseFloat(height)
    weight = parseFloat(weight)

    if (isNaturalNumber(height) && isNaturalNumber(weight)) {
      const heightByMeter = height / 100
      return roundNumber(weight / (heightByMeter * heightByMeter), 2)
    }

    return '身長と体重を入力してください'
  }

  calculateIdealWeight = () => {
    let { height, weight } = this.state

    height = parseFloat(height)
    weight = parseFloat(weight)

    if (isNaturalNumber(height) && isNaturalNumber(weight)) {
      const heightByMeter = height / 100
      return roundNumber(heightByMeter * heightByMeter * 22, 2)
    }

    return '身長と体重を入力してください'
  }

  render() {
    const bmi = '身長と体重を入力してください'

    return (
      <Fragment>
        <h3>BMIと適正体重を計算します</h3>
        <Form formValues={this.state} handleChange={this.handleChange} />

        <hr className="uk-divider-icon" />
        <div>
          <table className="uk-table uk-table-divider">
            <tbody>
              <tr>
                <th>BMI</th>
                <td>{this.calculateBmi()}</td>
              </tr>
              <tr>
                <th>適正体重</th>
                <td>{this.calculateIdealWeight()} kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="uk-divider-icon" />
        <ul uk-accordion="collapsible: true" className="uk-accordion">
          <li>
            <a className="uk-accordion-title" href="#">
              BMIの計算式
            </a>
            <div className="uk-accordion-content">
              <p>BMI＝ 体重kg ÷ (身長m)2</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              適正体重の計算式
            </a>
            <div className="uk-accordion-content">
              <p>適正体重 = (身長m)2 ×22</p>
            </div>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default Bmi
