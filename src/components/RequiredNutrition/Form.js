import React, { Component } from 'react'

const Form = ({ formValues, handleChange }) => {
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
      </div>
    </form>
  )
}

export default Form
