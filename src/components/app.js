import React, { Component } from 'react';

import Header from "./header"
import ContentWrapper from "./content/contentWrapper"
import Footer from "./footer"


export default class App extends Component {
  constructor() {
    super()

    const currentDate = new Date()

    this.state = {
      data: [],
      monthData: {},
      currentIndex: currentDate.getMonth()
    }

    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/month/get/2022")
    .then(response => response.json())
    .then(data => this.setState({
      data: this.formatData(data),
      monthData: this.formatData(data)[this.state.currentIndex]
    }))
    .catch(error => console.log("Error getting months: ", error))
  }

  formatData(data) {
    const jan = data.filter(month => month.name == "January")[0]
    const feb = data.filter(month => month.name == "February")[0]
    const mar = data.filter(month => month.name == "March")[0]
    const apr = data.filter(month => month.name == "April")[0]
    const may = data.filter(month => month.name == "May")[0]
    const jun = data.filter(month => month.name == "June")[0]
    const jul = data.filter(month => month.name == "july")[0]
    const aug = data.filter(month => month.name == "August")[0]
    const sept = data.filter(month => month.name == "September")[0]
    const oct = data.filter(month => month.name == "October")[0]
    const nov = data.filter(month => month.name == "November")[0]
    const dec = data.filter(month => month.name == "December")[0]

    return [jan, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec]
  }

  handleMonthChange(direction) {
    const newIndex = direction === "next" ? this.state.currentIndex + 1 : this.state.currentIndex -1

    this.setState({
      monthData: this.state.data[newIndex],
      currentIndex: newIndex
    })
  }

  render() {
    return (
      <div className='page-wrapper'>
        <Header month={this.state.monthData.name} handleMonthChange={this.handleMonthChange} />
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
