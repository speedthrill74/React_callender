import React from "react"

export default function header(props) {
    return (
        <div className="header">
           <button onClick={() => props.handleMonthChange("previous")}>Previous</button>
           <h2>{props.month}</h2>
           <button onClick={() => props.handleMonthChange("next")}>Next</button>
        </div>
    )
}