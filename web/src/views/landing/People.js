import React, { Component } from 'react'
import morganUrl from './../../assets/morgan.svg'
import vickyUrl from './../../assets/vicky.svg'
import leviUrl from './../../assets/levi.svg'

class People extends Component {
  render () {
    return (
      <div className="sc-landing-people">
        <div className="sc-landing-people--title">
          Slackchat is for you
        </div>
        <div className="sc-landing-people--quotes">
          <div className="sc-landing-people--quote">
            <img className="sc-landing-people--quote-img" src={morganUrl} alt=""/>
            <div className="sc-landing-people--quote-text">
              <i>
                "I added Slackchat to my shoppify site in under 5 minutes. Wonderful!"
              </i>
            </div>
          </div>
          <div className="sc-landing-people--quote">
            <img className="sc-landing-people--quote-img" src={vickyUrl} alt=""/>
            <div className="sc-landing-people--quote-text">
              <i>
              "Great for women, or for men. For white people, or asians! Works for everyone"
              </i>
            </div>
          </div>
          <div className="sc-landing-people--quote">
            <img className="sc-landing-people--quote-img" src={leviUrl} alt=""/>
            <div className="sc-landing-people--quote-text">
              <i>
                "As an experienced architect I can say - Slackchat is very well made."
              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default People