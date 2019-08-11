import React from 'react'

const Day = ({ day, onDateChange, color, selectedDay }) => (
  <button
    className={`day ${selectedDay ? 'selected-day' : undefined}`}
    key={`prevMonth-${day}`}
    style={{ color }}
    onClick={onDateChange}>
    {day}
  </button>
)

export default Day
