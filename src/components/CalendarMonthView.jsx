import React, { useEffect, useState } from 'react'
import { calculateMonthDays } from '../utils/calculateMonthDays'
import { monthText, weekDays } from '../utils/dateDecriptions'
import Day from '../components/Day'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CalendarMonthView = ({
  month,
  year,
  onDateChange,
  handleSetMonth,
  handleSetYear,
  date
}) => {
  const [monthViewDays, setMonthViewDays] = useState([])

  useEffect(() => {
    setMonthViewDays(calculateMonthDays(month, year))
  }, [month, year])

  return (
    <>
      {month && month !== 0 && monthViewDays && (
        <div className='days-container'>
          <label className='startdate'>Ingangsdatum</label>
          <div className='startdate-monthcontainer'>
            <div className='flex-row'>
              <FontAwesomeIcon
                onClick={() => handleSetMonth(month === 1 ? 11 : month - 1)}
                className='caret'
                icon={faCaretLeft}
              />
              <p className='output-text'>{monthText[month - 1]}</p>
              <FontAwesomeIcon
                onClick={() => handleSetMonth(month === 11 ? 1 : month + 1)}
                className='caret'
                icon={faCaretRight}
              />
            </div>
            <div className='flex-row'>
              <FontAwesomeIcon
                onClick={() => handleSetYear(year - 1)}
                className='caret'
                icon={faCaretLeft}
              />
              <p className='output-text'>{year}</p>
              <FontAwesomeIcon
                onClick={() => handleSetYear(year + 1)}
                className='caret'
                icon={faCaretRight}
              />
            </div>
          </div>

          {weekDays.map(weekDay => (
            <p className='weekday' key={weekDay}>
              {weekDay}
            </p>
          ))}

          {monthViewDays &&
            monthViewDays.map((day, i) => {
              const monthDay =
                i < day - 14 ? month - 1 : i > day + 14 ? month + 1 : month
              const calDay = `${day < 10 ? '0' + day : day}-${
                monthDay < 10 ? '0' + monthDay : monthDay
              }-${year}`
              const selectedDay = date === calDay

              return (
                <Day
                  key={`currentMonth-${day}-${i}`}
                  day={day}
                  month={monthDay}
                  color={
                    !selectedDay &&
                    (month === monthDay ? '#000066' : 'lightgrey')
                  }
                  selectedDay={selectedDay}
                  year={year}
                  onDateChange={() => onDateChange(calDay)}
                />
              )
            })}
        </div>
      )}
    </>
  )
}

export default CalendarMonthView
