import React, { useState, useEffect } from 'react'
import CalendarMonthView from './CalendarMonthView'

const Calendar = props => {
  const [date, setDate] = useState('11 - 03 - 2018')
  const [month, setMonth] = useState(3)
  const [monthView, setMonthView] = useState(true)
  const [day, setDay] = useState(11)
  const [year, setYear] = useState('2018')

  useEffect(() => {
    const dateValues = date.split(' - ')
    const newYear = dateValues[2]
    setMonth(Number(dateValues[1]))
    setDay(Number(dateValues[0]))
    setYear(newYear)
  }, [date])

  return (
    <div>
      <input
        value={date}
        type='text'
        pattern='/[0-33]-[0-11]-3000/'
        onChange={({ target: { value } }) => setDate(value)}
        maxLength='14'
        minLength='6'
      />
      {monthView && (
        <CalendarMonthView
          date={date}
          month={month}
          currentDay={day}
          year={year}
          onDateChange={setDate}
        />
      )}
    </div>
  )
}

export default Calendar
