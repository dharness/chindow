import React, { Component } from 'react'

class Widget extends Component {
  render () {
    return (
      <div className="sc-widget-form">
        <div className="sc-widget-form--header">
          <div className="sc-widget-title">
            Copy the code below into your index.html:
          </div>
          <div className="sc-widget-button" id="sc-copy-script-button">
            Copy
          </div>
        </div>
        <textarea className="sc-widget-input" id="sc-copy-script-input">
          <script src="https://slackchat.io/api/embed/<%- team_id %>"></script>
        </textarea>
      </div>
    )
  }
}

export default Widget