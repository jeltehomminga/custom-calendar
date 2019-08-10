import React, { useEffect, useState } from 'react'
import { calculateMonthDays } from '../utils/calculateMonthDays'
import Day from '../components/Day'

const CalendarMonthView = ({ month, year, onDateChange, currentDay }) => {
  const [monthViewDays, setMonthViewDays] = useState({})

  useEffect(() => {
    setMonthViewDays(calculateMonthDays(month, year))
  }, [month, year])


  const weekDays =['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']

  console.log(monthViewDays)
  return (
<>



        {month && month !== 0 && monthViewDays && (


          <div className='days-container'>

            {weekDays.map((weekDay)=> <p className='weekday' key={weekDay}>{weekDay}</p>)}

            {monthViewDays.prevMonthDays &&
              monthViewDays.prevMonthDays.map(day => (
                  <Day 
                  day={day} 
                  key={`prevMonth-${day}`}
                  month={Number(month) === 1 ? 11 : Number(month) - 1} 
                  year={Number(month) === 1 ? Number(year) - 1 : year}
                  onDateChange={onDateChange}
                  />
              ))}

            {monthViewDays.currentMonthDays &&
              monthViewDays.currentMonthDays.map(day => (

                <Day 
                  key={`currentMonth-${day}`}
                  day={day} 
                  month={month} 
                  year={year}
                  onDateChange={onDateChange}
                />

              ))}

            {monthViewDays.nextMonthDays &&
              monthViewDays.nextMonthDays.map(day => (

                <Day 
                key={`nextMonth-${day}`}
                day={day} 
                month={Number(month) === 12 ? 1 : Number(month) + 1} 
                year={Number(month) === 12 ? Number(year) + 1 : year}
                onDateChange={onDateChange}
                />

              ))}
          </div>
        )}
</>
  )
}

export default CalendarMonthView
