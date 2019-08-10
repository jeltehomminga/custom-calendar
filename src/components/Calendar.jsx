import React, { useState, useEffect } from 'react'
import CalendarMonthView from './CalendarMonthView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
    <div className='calendar-container'>
      
      <div className='input-container'>
        <div className='inputfield-container'>
        <label>Ingangsdatum</label>
          <input
            value={date}
            type='text'
            pattern='/[0-33]-[0-11]-3000/'
            onChange={({ target: { value } }) => setDate(value)}
            maxLength='14'
            minLength='6'
          />
        </div>
        <div className='inputicon-container' onClick={()=>setMonthView(!monthView)}>
          <FontAwesomeIcon className='calendar' icon={faCalendarAlt} />
        </div>
      </div>

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
