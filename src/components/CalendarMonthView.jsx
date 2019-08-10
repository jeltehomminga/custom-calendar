import React, { useEffect, useState } from 'react'
import { calendarMonthMatch } from '../utils/calendarSet'

const CalendarMonthView = ({ month, year, onDateChange, currentDay }) => {
  const [monthViewDays, setMonthViewDays] = useState({})

  useEffect(() => {
    console.log(calendarMonthMatch[month])
    setMonthViewDays(calendarMonthMatch[month])
  }, [month])
  console.log(monthViewDays)
  return (
    <div>
      <h2>CalendarMonthView</h2>
      <div>
        {month && monthViewDays && (
          <div className='days-container'>
            {monthViewDays.prevMonthDays &&
              monthViewDays.prevMonthDays.map(day => (
                <p
                  className='day'
                  key={`prevMonth-${day}`}
                  onClick={() =>
                    onDateChange(
                      `${day} - ${
                        month - 1 > 9 ? month - 1 : '0' + month - 1
                      } - ${year}`
                    )
                  }>
                  {day}
                </p>
              ))}

            {monthViewDays.currentMonthDays &&
              monthViewDays.currentMonthDays.map(day => (
                <p
                  className='day'
                  key={`currentMonth-${day}`}
                  onClick={() =>
                    onDateChange(
                      `${day} - ${month > 9 ? month : '0' + month} - ${year}`
                    )
                  }>
                  {day}
                </p>
              ))}

            {monthViewDays.nextMonthDays &&
              monthViewDays.nextMonthDays.map(day => (
                <p
                  className='day'
                  key={`nextMonth-${day}`}
                  onClick={() =>
                    onDateChange(
                      `${day} - ${
                        month + 1 > 9 ? month + 1 : '0' + (month + 1)
                      } - ${year}`
                    )
                  }>
                  {day}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CalendarMonthView
