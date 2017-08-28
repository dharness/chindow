import React, { Component } from 'react'
import LeftNav from './LeftNav'
import Header from './Header'
import AccountInfo from './AccountInfo'
import Chart from './analytics/Chart'
import Widget from './widget/Widget'
import Settings from './settings/Settings'
import Payments from './payments/Payments'
import { Route } from 'react-router-dom'


class componentName extends Component {
  render () {
    return (
      <div className="sc-container">
        <Header />
        <div className="sc-horz-divider"></div>
        <AccountInfo />
        <div className="sc-horz-divider"></div>
        <div className="sc-dashboard-content">
          <LeftNav />
          <Route path='/dashboard/analytics' component={Chart}/>
          <Route path='/dashboard/widget' component={Widget}/>
          <Route path='/dashboard/settings' component={Settings}/>
          <Route path='/dashboard/payments' component={Payments}/>
        </div>
      </div>
    )
  }
}

export default componentName