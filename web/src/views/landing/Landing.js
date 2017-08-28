import React, { Component } from 'react'
import Header from './Header'
import Hero from './Hero'
import Info from './Info'
import Pricing from './Pricing'
import People from './People'
import Plea from './Plea'
import Footer from './Footer'


class Landing extends Component {
    render () {
        return (
            <div>
                <div className="sc-container">
                    <Header />
                    <Hero />
                </div>
                <div className="sc-landing--fat-divider"></div>
                <div className="sc-container">
                    <Info />
                    <Pricing />
                    <People />
                </div>
                <Plea />
                <div className="sc-container">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Landing