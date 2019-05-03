import React, { Component } from 'react'
import GoogleAnalytics from 'react-ga'
import { isProduction } from './utils'

if (isProduction) {
  GoogleAnalytics.initialize('UA-56127730-5')
}

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (isProduction) {
      GoogleAnalytics.set({
        page,
        ...options,
      })
      GoogleAnalytics.pageview(page)
    }
  }

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search
      trackPage(page)
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search
      const nextPage = this.props.location.pathname + this.props.location.search

      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}

export default withTracker
