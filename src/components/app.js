import React, { Component } from 'react';

import Header from "./header"
import ContentWrapper from "./content/contentWrapper"
import Footer from "./footer"

import dummyData from "../../static/assets/dummyData"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monthData: dummyData.data[1]
    }
  }

  render() {
    return (
      <div className='page-wrapper'>
        <Header month={this.state.monthData.name} />
        <ContentWrapper 
          daysInMonth={this.state.monthData.days_in_month}
          daysInPreviousMonth={this.state.monthData.days_in_previous_month}
          startDay={this.state.monthData.start_day}
        />
        <Footer year={this.state.monthData.year} />
      </div>
    );
  }
}
