import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('main'))
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default
    render(nextApp)
  })
}

render(App)
