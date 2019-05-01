import React, { Component } from 'react'

const Form = ({ formValues, handleChange }) => {
  return (
    <form className="uk-form-horizontal">
      <div className="uk-margin">
        <label className="uk-form-label">身長</label>
        <div className="uk-form-controls">
          <input
            className="uk-input"
            type="text"
            name="height"
            value={formValues.height}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label">体重</label>
        <div className="uk-form-controls">
          <input
            className="uk-input"
            type="text"
            name="weight"
            value={formValues.weight}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
