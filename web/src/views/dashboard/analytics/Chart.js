import React, { Component } from 'react'

class Chart extends Component {
  render () {
    return (
      <div className="sc-analytics">
        <div className="sc-analytics--chart-header">
          <a className="sc-analytics--chart-section active" data-name="allChats">
            <div className="sc-analytics--chart-section-numbers">
              <span id="sc-all-chats-counter">&#8203;</span>
              <span>/25</span>
            </div>
            <div className="sc-analytics--chart-section-title">ALL CHATS</div>
          </a>
          <a className="sc-analytics--chart-section" data-name="missedChats">
            <div className="sc-analytics--chart-section-numbers" id="sc-missed-chats-counter">&#8203;</div>
            <div className="sc-analytics--chart-section-title">MISSED CHATS</div>
          </a>
          <a className="sc-analytics--chart-section" data-name="allVisitors">
            <div className="sc-analytics--chart-section-numbers" id="sc-all-visitors-counter">&#8203;</div>
            <div className="sc-analytics--chart-section-title">TOTAL VISITORS</div>
          </a>
          <div className="sc-analytics--chart-etc">
            <div className="sc-analytics--chart-date">March 2017</div>
            <div className="sc-analytics--chart-switcher">
              <div className="sc-analytics--chart-switcher-arrow"></div>
              <div className="sc-analytics--chart-switcher-arrow"></div>
            </div>
          </div>
        </div>
        <div className="sc-analytics--canvas-wrapper">
          <canvas 
            className="sc-analytics--canvas" 
            id="canvas" 
            width="500" 
            height="200"></canvas>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
        <script>

        </script>
      </div>
    )
  }
}

export default Chart