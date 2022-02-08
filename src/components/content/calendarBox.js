import React, { Component} from "react"

export default class CalendarBox extends Component {
    constructor(props) {
        super()

        this.state = {
            text: props.reminder ? props.reminder.text : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value })
    }

    handleSubmit() {
        fetch("http://127.0.0.1:5000/reminder/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                day: this.props.date,
                month: this.props.month,
                year: "2022",
                text: this.state.text
            })
        })

        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error adding reminder: ",error))
    }
    
    render() {
        return (
            <div className="CalendarBox">
               <div className="date">{this.props.date}</div>
               <textarea 
                    value={this.props.reminder ? this.props.remidner.text : this.state.text}
                    onChange={this.handleChange}
                    onBlur={this.handleSubmit}>
               </textarea>
            </div>
        )
    }
}