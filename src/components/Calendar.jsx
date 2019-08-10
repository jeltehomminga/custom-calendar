import React, { useState } from 'react'
import CalendarMonthView from './CalendarMonthView'

const Calendar = props => {
  const [date, setDate] = useState(props.date)
  const [montView, setMonthView] = useState(false)
  const handleChange = e => {
    setMonthView(true)
    setDate(e.target.value)
  }
  return (
    <div>
      <input value={date} onChange={handleChange} />
      {montView && <CalendarMonthView date={date} />}
    </div>
  )
}

export default Calendar
