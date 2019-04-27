import React, { Component, Fragment } from 'react'

const nutritionData = [
  {
    ages: [1, 2],
    male: {
      energy: 1000,
    },
    female: {
      energy: 900,
    },
  },
  {
    ages: [3, 4, 5],
    male: {
      energy: 1300,
    },
    female: {
      energy: 1250,
    },
  },
  {
    ages: [6, 7],
    male: {
      energy: 1550,
    },
    female: {
      energy: 1450,
    },
  },
  {
    ages: [8, 9],
    male: {
      energy: 1800,
    },
    female: {
      energy: 1700,
    },
  },
  {
    ages: [10, 11],
    male: {
      energy: 2250,
    },
    female: {
      energy: 2000,
    },
  },
  {
    ages: [12, 13, 14],
    male: {
      energy: 2500,
    },
    female: {
      energy: 2250,
    },
  },
  {
    ages: [15, 16, 17],
    male: {
      energy: 2750,
    },
    female: {
      energy: 2250,
    },
  },
  {
    ages: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    male: {
      energy: 2650,
    },
    female: {
      energy: 1950,
    },
  },
  {
    ages: [
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
    ],
    male: {
      energy: 2650,
    },
    female: {
      energy: 2000,
    },
  },
  {
    ages: [
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
    ],
    male: {
      energy: 2450,
    },
    female: {
      energy: 1950,
    },
  },
  {
    ages: [70],
    male: {
      energy: 2200,
    },
    female: {
      energy: 1700,
    },
  },
]

class Form extends Component {
  render() {
    const { formValues, handleChange } = this.props

    return (
      <form className="uk-form-horizontal">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-horizontal-select">
            Age
          </label>
          <div className="uk-form-controls">
            <select
              className="uk-select uk-form-width-small"
              name="age"
              value={formValues.age}
              onChange={handleChange}
            >
              {[...Array(70).keys()]
                .map(n => {
                  if (n + 1 == 70) {
                    return '70 ~'
                  }
                  return n + 1
                })
                .map(n => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-form-label">Radio</div>
          <div className="uk-form-controls uk-form-controls-text">
            <label>
              <input
                className="uk-radio"
                type="radio"
                name="sex"
                value="male"
                checked={formValues.sex === 'male'}
                onChange={handleChange}
              />{' '}
              Male
            </label>
            <br />
            <label>
              <input
                className="uk-radio"
                type="radio"
                name="sex"
                value="female"
                checked={formValues.sex === 'female'}
                onChange={handleChange}
              />{' '}
              Female
            </label>
          </div>
        </div>
      </form>
    )
  }
}

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
    const oneEnergy = nutritionData.find(one =>
      one.ages.includes(parseInt(this.state.age, 10))
    )
    const data = {
      energy: oneEnergy[this.state.sex].energy,
    }
    return (
      <Fragment>
        <Form formValues={this.state} handleChange={this.handleChange} />
        <List data={data} />
      </Fragment>
    )
  }
}

const List = ({ data }) => {
  return (
    <dl>
      <dt>Energy</dt>
      <dd>{data.energy} kcal/day</dd>
    </dl>
  )
}

const App = () => (
  <div className="uk-container">
    <h1>Nutrition</h1>
    <RequiredNutrition />
  </div>
)

export default App
