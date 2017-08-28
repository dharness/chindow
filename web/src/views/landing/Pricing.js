import React, { Component } from 'react'
import PricingPlans from './../partials/PricingPlans'

class Pricing extends Component {
  render () {
    return (
      <div className="sc-landing-pricing">
        <div className="sc-landing-pricing--title">Don’t break the bank</div>
        <div className="sc-landing-pricing--subheader">Our plans will meet all your live chat needs while still being affordable.</div>

        <PricingPlans />

        <div className="sc-landing-pricing--good-points">
          <div className="sc-landing-pricing--good-point">
            <div className="sc-landing-pricing--good-point-title blue">
              Seamless Slack integration
            </div>
            <div className="sc-landing-pricing--good-point-body">
              No programming required. Simply sign up, copy paste the snippet,
              and start smooth talking your visitors. It's really that easy.
            </div>
          </div>
          <div className="sc-landing-pricing--good-point">
            <div className="sc-landing-pricing--good-point-title yellow">
              Usage metrics & analytics
            </div>
            <div className="sc-landing-pricing--good-point-body">
              "That which gets measured, gets managed". Heck, this is
              what we use for our metrics and analytics.
            </div>
          </div>
          <div className="sc-landing-pricing--good-point">
            <div className="sc-landing-pricing--good-point-title pink">
              Unlimited monthly chats
            </div>
            <div className="sc-landing-pricing--good-point-body">
              For just 7 bucks you can get unlimited conversations for
              your growing business! If you're just starting out, we offer
              200 conversations completely free.
            </div>
          </div>
          <div className="sc-landing-pricing--good-point">
            <div className="sc-landing-pricing--good-point-title green">
              Beautiful on every site 
            </div>
            <div className="sc-landing-pricing--good-point-body">
              We put special care into making our widget beautiful,
              because that's what your customers see. Plus, you can customize the colour,
              text, and behaviour to match your site!
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing