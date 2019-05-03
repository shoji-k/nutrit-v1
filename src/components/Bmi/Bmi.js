import React, { Component, Fragment } from 'react'
import Form from './Form'
import { isNaturalNumber, roundNumber } from '../../utils'

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
          <li>
            <a className="uk-accordion-title" href="#">
              目標とするＢＭＩの範囲
            </a>
            <div className="uk-accordion-content">
              <table className="uk-table uk-table-divider">
                <thead>
                  <tr>
                    <th>年齢（歳）</th>
                    <th>目標とするBMI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18～49</td>
                    <td>18.5～24.9</td>
                  </tr>
                  <tr>
                    <td>50～69</td>
                    <td>20.0～24.9</td>
                  </tr>
                  <tr>
                    <td>70 以上</td>
                    <td>21.5～24.9</td>
                  </tr>
                </tbody>
              </table>
              <small>
                出典:{' '}
                <a href="https://www.glico.co.jp/navi/e07.htm">食事摂取基準</a>
              </small>
            </div>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default Bmi
