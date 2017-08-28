import React, { Component } from 'react'

class Settings extends Component {
  render () {
    return (
      <form className="sc-settings-form" id="sc-settings-form" method="POST" action="/<%= team_id %>/dashboard/settings">

        <div className="sc-settings-header">
          <div className="sc-settings-title">Configure Settings</div>
          <button type="submit" className="sc-settings-button" id="sc-update-settings-button" disabled>Update</button>
        </div>

        <div className="sc-settings-sections">
          <div className="sc-settings-section">
            <div className="sc-settings-section-title">Domain</div>
            <input className="sc-settings-domain-input" name="domain" value="<%= settings.domain %>"></input>
          </div>

          <div className="sc-settings-section">
            <div className="sc-settings-section-title">Display name</div>
            <input className="sc-settings-domain-input" name="displayName" value="<%= settings.displayName %>"></input>
          </div>

          <div className="sc-settings-section">
            <div className="sc-settings-section-title">Email</div>
            <input className="sc-settings-domain-input" name="email" value="<%= settings.email %>"></input>
          </div>

          <div className="sc-settings-section">
            <div className="sc-settings-section-title">Color</div>
            <input className="sc-settings-domain-input jscolor" name="headerColor" value="<%= settings.headerColor %>"></input>
          </div>
        </div>
      </form>
    )
  }
}

export default Settings