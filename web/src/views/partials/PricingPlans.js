import React, { Component } from 'react'
import freePointsUrl from './../../assets/free-points.svg'
import proPointsUrl from './../../assets/pro-points.svg'

class PricingPlans extends Component {
  render () {
    // var href=`https://slack.com/oauth/authorize?redirect_uri=${process.env.SLACK_REDIRECT_URI}&scope=${process.env.SLACK_SCOPES}&client_id=${process.env.SLACK_CLIENT_ID}`;
    return (  
      <div className="sc-landing-pricing--plans">
        <div className="sc-landing-pricing--plan">
          <div className="sc-landing-pricing--plan-header">
            <div className="sc-landing-pricing--plan-title">Free</div>
            <div className="sc-landing-pricing--plan-subheader">No credit card required!</div>
          </div>
          <div className="sc-landing-pricing--plan-price">
            $0/month
          </div>
          <img src={freePointsUrl} alt="" className="sc-landing-pricing--plan-points" />
          <div className="sc-landing-pricing--plan-button-wrapper">
            <a className="sc-landing-pricing--plan-button" href='<%= href %>'>Get Slackchat Free</a>
          </div>
        </div>
      
        <div className="sc-landing-pricing--plan pro">
          <div className="sc-landing-pricing--plan-header">
            <div className="sc-landing-pricing--plan-title">Pro</div>
            <div className="sc-landing-pricing--plan-subheader">Be ready for all your users</div>
          </div>
          <div className="sc-landing-pricing--plan-price">
            $7/month
          </div>
          <img src={proPointsUrl} alt="" className="sc-landing-pricing--plan-points"/>
          <div className="sc-landing-pricing--plan-button-wrapper">
            <a className="sc-landing-pricing--plan-button" id="customButton">Get Slackchat Pro</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingPlans