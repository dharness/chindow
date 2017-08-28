import React, { Component } from 'react'
import logoUrl from './../../assets/logo.svg'
import userUrl from './../../assets/user.svg'

class Header extends Component {
  render () {
    return (
      <div className="sc-dashboard-header">
      <div className="sc-dashboard-header--brand">
        <img src={logoUrl} alt=""/>
        <div className="sc-brand-text">slackchat</div>
      </div>

      <button className="sc-dashboard-header--dropdown">
        <div className="sc-dashboard-header--upgrade-float">Upgrade!</div>
        <img className="sc-dashboard-header--avatar-img" src={userUrl} alt="" />

        <div className="sc-dashboard-dropdown-menu" >
          <div className="sc-dashboard-dropdown-item">
            <div className="sc-dashboard-dropdown-item--user">
              <div className="sc-dashboard-dropdown-username">
                <div className="sc-dashboard-dropdown-circle"></div>
                <div className="sc-dashboard-dropdown-username-text">
                  dharness
                </div>
              </div>
              <div className="sc-dashboard-dropdown-email">dharness@kingofthestack.com</div>
            </div>
          </div>
          <div className="sc-horz-divider"></div>
          <a className="sc-dashboard-dropdown-item link" data-route="/<%= team_id %>/dashboard/settings" >
            Settings
          </a>
          <a className="sc-dashboard-dropdown-item link" data-route="/<%= team_id %>/dashboard/settings" >
            Upgrade Account
          </a>
          <a className="sc-dashboard-dropdown-item link" data-route="/auth/signout">
            Logout
          </a>
        </div>
      </button>
      </div>
    )
  }
}

export default Header