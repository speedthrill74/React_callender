import React, { Component} from "react"

export default class CalendarBox extends Component {
    render() {
        return (
            <div className="CalendarBox">
               <div className="date">{this.props.date}</div>
               <textarea></textarea>
            </div>
        )
    }
}