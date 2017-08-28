import React, { Component } from 'react'
import slackLogoUrl from './../../assets/slacklogo.svg'

class Plea extends Component {
  render () {
    // var href=`https://slack.com/oauth/authorize?redirect_uri=${process.env.SLACK_REDIRECT_URI}&scope=${process.env.SLACK_SCOPES}&client_id=${process.env.SLACK_CLIENT_ID}`;
    return (
      <div className="sc-landing-plea">
        <div className="sc-landing-plea--text">
          Start using Slackchat today for <i>free!</i>
        </div>
        <div className="sc-landing-plea--button-wrapper">
          <a className="sc-landing-plea--button" href='<%= href %>'>
            <img src={slackLogoUrl} alt="" />
            <div className="sc-landing-plea--button--text">
              Add to Slack
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Plea