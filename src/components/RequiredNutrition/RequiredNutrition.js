import React, { Component, Fragment } from 'react'
import { nutritionData } from './constants'
import Form from './Form'
import List from './List'

class RequiredNutrition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 35,
      sex: 'male',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const data = nutritionData.find(one =>
      one.ages.includes(parseInt(this.state.age, 10))
    )
    return (
      <Fragment>
        <h3>食事摂取基準</h3>
        <Form formValues={this.state} handleChange={this.handleChange} />
        <hr className="uk-divider-icon" />
        <List data={data[this.state.sex]} />
        <small>
          出典: <a href="https://www.glico.co.jp/navi/e07.htm">食事摂取基準</a>
        </small>
      </Fragment>
    )
  }
}

export default RequiredNutrition
