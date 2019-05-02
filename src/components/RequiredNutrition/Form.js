import React, { Component } from 'react'

const Form = ({ formValues, handleChange }) => {
  const exercise_levels = ['低い', 'ふつう', '高い']

  return (
    <form className="uk-form-horizontal">
      <div className="uk-margin">
        <label className="uk-form-label">年齢</label>
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
        <div className="uk-form-label">性別</div>
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
            男性
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
            女性
          </label>
        </div>
        <div className="uk-margin">
          <div className="uk-form-label">身体活動レベル</div>
          <div className="uk-form-controls uk-form-controls-text">
            {exercise_levels.map((level, i) => (
              <label key={i} style={{ paddingRight: '1rem' }}>
                <input
                  className="uk-radio"
                  type="radio"
                  name="exercise_level"
                  value={i + 1}
                  checked={formValues.exercise_level == i + 1}
                  onChange={handleChange}
                />{' '}
                {level}
              </label>
            ))}
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
