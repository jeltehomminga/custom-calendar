import React, { useEffect, useState } from "react";
import { calculateMonthDays } from "../utils/calculateMonthDays";
import Day from "../components/Day";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CalendarMonthView = ({
  month,
  year,
  onDateChange,
  currentDay,
  handleSetMonth,
  handleSetYear
}) => {
  const [monthViewDays, setMonthViewDays] = useState({});

  useEffect(() => {
    setMonthViewDays(calculateMonthDays(month, year));
  }, [month, year]);

  const weekDays = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
  const monthText = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November"
  ];

  console.log(monthViewDays);
  return (
    <>
      {month && month !== 0 && monthViewDays && (
        <div className="days-container">
          <label className="startdate">Ingangsdatum</label>
          <div className="startdate-monthcontainer">
            <div className="flex-row">
              <FontAwesomeIcon
                onClick={() => handleSetMonth(month === 1 ? 11 : month - 1)}
                className="caret"
                icon={faCaretLeft}
              />
              <p className="output-text">{monthText[month - 1]}</p>
              <FontAwesomeIcon
                onClick={() => handleSetMonth(month === 11 ? 1 : month + 1)}
                className="caret"
                icon={faCaretRight}
              />
            </div>
            <div className="flex-row">
              <FontAwesomeIcon
                onClick={() => handleSetYear(year - 1)}
                className="caret"
                icon={faCaretLeft}
              />
              <p className="output-text">{year}</p>
              <FontAwesomeIcon
                onClick={() => handleSetYear(year + 1)}
                className="caret"
                icon={faCaretRight}
              />
            </div>
          </div>

          {weekDays.map(weekDay => (
            <p className="weekday" key={weekDay}>
              {weekDay}
            </p>
          ))}

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
  );
};

export default CalendarMonthView;
