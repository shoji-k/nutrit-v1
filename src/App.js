import React, { Component, Fragment } from 'react'

const nutritionData = [
  {
    ages: [1, 2],
    male: {
      energy: 1000,
      protein: 20,
    },
    female: {
      energy: 900,
      protein: 20,
    },
  },
  {
    ages: [3, 4, 5],
    male: {
      energy: 1300,
      protein: 25,
    },
    female: {
      energy: 1250,
      protein: 25,
    },
  },
  {
    ages: [6, 7],
    male: {
      energy: 1550,
      protein: 30,
    },
    female: {
      energy: 1450,
      protein: 30,
    },
  },
  {
    ages: [8, 9],
    male: {
      energy: 1800,
      protein: 40,
    },
    female: {
      energy: 1700,
      protein: 40,
    },
  },
  {
    ages: [10, 11],
    male: {
      energy: 2250,
      protein: 45,
    },
    female: {
      energy: 2000,
      protein: 45,
    },
  },
  {
    ages: [12, 13, 14],
    male: {
      energy: 2500,
      protein: 60,
    },
    female: {
      energy: 2250,
      protein: 55,
    },
  },
  {
    ages: [15, 16, 17],
    male: {
      energy: 2750,
      protein: 60,
    },
    female: {
      energy: 2250,
      protein: 55,
    },
  },
  {
    ages: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    male: {
      energy: 2650,
      protein: 60,
    },
    female: {
      energy: 1950,
      protein: 50,
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
      protein: 60,
    },
    female: {
      energy: 2000,
      protein: 50,
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
      protein: 60,
    },
    female: {
      energy: 1950,
      protein: 50,
    },
  },
  {
    ages: [70],
    male: {
      energy: 2200,
      protein: 60,
    },
    female: {
      energy: 1700,
      protein: 50,
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
    const data = nutritionData.find(one =>
      one.ages.includes(parseInt(this.state.age, 10))
    )
    return (
      <Fragment>
        <h3>食事摂取基準</h3>
        <Form formValues={this.state} handleChange={this.handleChange} />
        <hr />
        <List data={data[this.state.sex]} />
        <small>
          出典: <a href="https://www.glico.co.jp/navi/e07.htm">食事摂取基準</a>
        </small>
      </Fragment>
    )
  }
}

const List = ({ data }) => {
  return (
    <table className="uk-table uk-table-divider">
      <tbody>
        <tr>
          <th>Energy</th>
          <td>{data.energy} kcal/day</td>
        </tr>
        <tr>
          <th>Protein</th>
          <td>{data.protein} g/day</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => (
  <div className="uk-container">
    <h1>Nutrition</h1>
    <RequiredNutrition />
  </div>
)

export default App
