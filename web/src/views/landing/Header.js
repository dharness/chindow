import React, { Component } from 'react'
import logoUrl from './../../assets/logo.svg'
import slackLogoUrl from './../../assets/slacklogo.svg'

class Header extends Component {
    render () {
        // var href = `https://slack.com/oauth/authorize?redirect_uri=${process.env.SLACK_REDIRECT_URI}&scope=${process.env.SLACK_SCOPES}&client_id=${process.env.SLACK_CLIENT_ID}`;

        return (
            <div className="sc-landing--header">
                <div className="sc-landing--logo">
                    <img src={logoUrl} alt="" />
                    <div className="sc-landing--logo-text">slackchat</div>
                </div>
                <div className="sc-landing--nav">
                    <a className="sc-landing--nav-item" href="#sc-landing--info">About</a>
                    <a className="sc-landing--nav-item" href="mailto:hello@kingofthestack.com">Contact</a>
                    <a className="sc-landing--nav-item login" href='<%= href %>'>
                        <img src={slackLogoUrl} alt="" />
                        Login
                    </a>
                </div>
            </div>
        )
    }
}

export default Header