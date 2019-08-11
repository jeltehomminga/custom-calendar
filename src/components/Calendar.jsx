import React, { useState, useEffect } from 'react'
import CalendarMonthView from './CalendarMonthView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Calendar = () => {
  const [date, setDate] = useState('11-03-2018')
  const [month, setMonth] = useState(null)
  const [monthView, setMonthView] = useState(false)
  const [day, setDay] = useState(11)
  const [year, setYear] = useState('2018')
  const [validMessage, setValidMessage] = useState('')

  // When the date changes, extract the day, year and month from the string,
  // And set them to the state
  useEffect(() => {
    const dateValues = date.split('-')
    const newYear = dateValues[2]
    setMonth(Number(dateValues[1]))
    setDay(Number(dateValues[0]))
    setYear(Number(newYear))
  }, [date])

  // When the date in the input field change
  // Set the date and validation message to the state
  const handleDateChange = ({ target }) => {
    setValidMessage(target.validationMessage)
    setDate(target.value)
  }

  return (
    <div className='calendar-container'>
      <div className='input-container'>
        <div className='inputfield-container'>
          <label className='startdate'>Ingangsdatum</label>
          <input
            value={date}
            type='text'
            pattern='^((?!00)[0-2][0-9]|(3)[0-3])-((?!00)((0)[0-9])|((1)[0-2]))-\d{4}$'
            onChange={handleDateChange}
          />
        </div>
        <div
          className='inputicon-container'
          onClick={() => date && setMonthView(!monthView)}>
          <FontAwesomeIcon className='calendar' icon={faCalendarAlt} />
        </div>
      </div>

      {!validMessage && date
        ? monthView && (
            <CalendarMonthView
              date={date}
              month={month}
              handleSetMonth={setMonth}
              handleSetYear={setYear}
              currentDay={day}
              year={year}
              onDateChange={setDate}
            />
          )
        : validMessage}
    </div>
  )
}

export default Calendar
