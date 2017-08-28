import React, { Component } from 'react'
import slackLogoBlueUrl from './../../assets/slack-logo-blue.svg'
import slackMockUrl from './../../assets/slackmock.svg'

class Hero extends Component {
  render () {
    // var href=`https://slack.com/oauth/authorize?redirect_uri=${process.env.SLACK_REDIRECT_URI}&scope=${process.env.SLACK_SCOPES}&client_id=${process.env.SLACK_CLIENT_ID}`;

    return (
      <div className="sc-landing-hero">
        <div className="sc-landing-hero--info">
          <div className="sc-landing-hero--info-text">
            Chat with users on <br />
            your site without <br />
            ever leaving <span className="sc-landing-hero--blue-word">Slack</span> <br />
          </div>
          <div className="sc-landing-hero--button-wrapper">
            <a className="sc-landing-hero--button" href='<%= href %>'>
              <img src={slackLogoBlueUrl} alt="" />
              <div className="sc-landing-hero--button-text">
                Get Slackchat free!
              </div>
            </a>
          </div>
        </div>
        <div className="sc-landing-hero--img">
          <img src={slackMockUrl} alt="" />
        </div>
      </div>
    )
  }
}

export default Hero