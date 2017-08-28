import React, { Component } from 'react'
import logoUrl from './../../assets/logo.svg'
import kotsLogoUrl from './../../assets/kots-logo.svg'
import facebookUrl from './../../assets/facebook.svg'
import mailUrl from './../../assets/mail.svg'

class Footer extends Component {
  render () {
    return (
      <div className="sc-footer">
        <div className="sc-footer--links">
          <div className="sc-footer--info">
            <div className="sc-footer--info-logo">
              <img src={logoUrl} alt="" />
              <span>slackchat</span>
            </div>
            <div>
              Free live chat for your site <br />
              that connects to Slack
            </div>
          </div>
          <div className="sc-footer--address">
            <div className="sc-footer--address-title">Address</div>
            <div className="sc-footer--address-info">
              715 Bryant Street <br />
              Toronto, Ontario <br />
              N6G3W7
            </div>
          </div>
          <div className="sc-footer--contact">
            <div className="sc-footer--contact-title"> Contact </div>
            <div className="sc-footer--contact-buttons">
              <a className="sc-footer--contact-button" href="https://www.facebook.com/kingofthestack/" rel="noopener noreferrer" target="_blank">
                <img className="facebook-icon" src={facebookUrl} alt="" />
              </a>
              <a className="sc-footer--contact-button" href="mailto:hello@kingofthestack.com">
                <img className="mail-icon" src={mailUrl} alt="" />
              </a>
            </div>
          </div>
          <div className="sc-footer--kots">
            <a className="sc-footer--kots-img-wrapper" href="https://kingofthestack.com/">
              <img src={kotsLogoUrl} alt="" />
            </a>
            <div>A King of the Stack product</div>
            <div>hello@kingofthestack.com</div>
          </div>
        </div>
        <div className="sc-footer--divider"></div>
        <div className="sc-footer--etc">
          <div>
            Copyright 2017. King of the Stack Inc.<br />
            All rights reserved.
          </div>
          <div className="sc-footer--etc-privacy">
            Privacy Policy & Terms of Service <br />
            Made with Canadian Maple Syrup
          </div>
        </div>
      </div>
    )
  }
}

export default Footer