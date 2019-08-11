import React from "react";

const Day = ({ day, month, year, onDateChange }) => (
  <button
    className="day"
    key={`prevMonth-${day}`}
    onClick={() => onDateChange(`${day} - ${month} - ${year}`)}
  >
    {day}
  </button>
);

export default Day;
