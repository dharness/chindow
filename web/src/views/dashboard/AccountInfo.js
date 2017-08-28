import React, { Component } from 'react'

class AccountInfo extends Component {
  render () {
    return (
      <div className="sc-info-nav">
        <div className="sc-info-nav--info">
          <div className="sc-info-company">
            <img src="/assets/user.svg" alt="" />
            <div className="sc-info-company--text">
              {"<%- team_name %>"}
            </div>
          </div>
          <span className="sc-info-since">Since: <span className="sc-info-since--value">
            {/* {`${created_at.toLocaleString('en-us', { month: "long" })} ${created_at.getFullYear()}`} */}
          </span></span>
          <span className="sc-info-domain">Domain: <span className="sc-info-domain--value">kingofthestack.com</span></span>
        </div>

        <div>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    )
  }
}

export default AccountInfo