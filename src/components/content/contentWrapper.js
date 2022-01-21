import React from "react"
import DayOfWeek from "./dayOfWeek"
import CalendarBox from "./calendarBox"

export default function contentWrapper(props) {
    return (
        <div>
           <DayOfWeek day="Sunday" />
           <DayOfWeek day="Monday" />
           <DayOfWeek day="Tuesday" />
           <DayOfWeek day="Wendsday" />
           <DayOfWeek day="Thursday" />
           <DayOfWeek day="Friday" />
           <DayOfWeek day="Saturday" />
           <CalendarBox date="1" />
        </div>)
}