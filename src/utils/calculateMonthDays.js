export const calculateMonthDays = (month, year) => {

  // decide days for the even and off months

  let monthDays = 0
  let lastMonthDays = 0

  if (month > 0 && month < 12) {
  monthDays =  month % 2 === 0 ? 32 : 33
  lastMonthDays = monthDays === 32 ? 33 : 32

  }

  const oddMonths = Math.ceil(month / 2)
  const evenMonths = month - oddMonths
  

  // total days that have passed in the year
  const totalYearsDays = year * 358
  const daysSelectedYear = (oddMonths * 33) + evenMonths * 32

  // the remainder of 7 to check days before this month
  const daysBefore = ((daysSelectedYear + totalYearsDays) % 7)
  
  // check days after
  const daysAfter = 7 - ((daysBefore + monthDays) % 7) 

  // so lastmonthDays minus daysbefore should be when the new row starts, then the monthdays, and then what is left with remainder of 7 
  let startDay = (lastMonthDays - daysBefore) + 1

  const prevMonthDays = [];
    for (let i = startDay; i <= lastMonthDays; i++) {
      prevMonthDays.push(i)
    }

  const currentMonthDays = [];
  for (let i = 1; i <= monthDays; i++) {
    currentMonthDays.push(i)
  }

  const nextMonthDays = [];
  if (daysAfter !== 7) {
    for (let i = 1; i <= daysAfter; i++) {
      nextMonthDays.push(i)
    }
  }

  return {
    prevMonthDays,
    currentMonthDays,
    nextMonthDays,
  }
}
