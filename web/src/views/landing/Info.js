import React, { Component } from 'react'

class Info extends Component {
  render () {
    return (
      <div className="sc-landing--info" id="sc-landing--info">
        <div className="sc-landing--info-section">
          <div className="sc-landing--info-section-title">
            Simple alternative to Intercom
          </div>
          <div className="sc-landing--info-section-content">
            Don't pay for crap you don't need! Slackchat is
            dead simple to use. It comes with the most important features
            from Intercom, but a fraction of the cost.
          </div>
        </div>
          <img src="/assets/plus-square.svg" alt="" className="sc-landing--info-plus-img" />
        <div className="sc-landing--info-section">
          <div className="sc-landing--info-section-title">
            Chat with customers from Slack
          </div>
          <div className="sc-landing--info-section-content">
            You use slack, you love slack, <i> we </i> love slack.
            You'll never miss a message, and you'll have the full power of Slack
            on hand to convert visitors into customers.
          </div>
        </div>
      </div>
    )
  }
}

export default Info