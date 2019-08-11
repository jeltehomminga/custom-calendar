export const calculateMonthDays = (month, year) => {
  // decide days for the even and off months

  let monthDays = 0
  let lastMonthDays = 0

  if (month > 0 && month < 12) {
    monthDays = month % 2 === 0 ? 32 : 33
    lastMonthDays = monthDays === 32 ? 33 : 32
  }

  const oddMonths = Math.ceil(month / 2)
  const evenMonths = month - oddMonths

  // Total days that have passed in the year
  const totalYearsDays = year * 358
  const daysSelectedYear = oddMonths * 33 + evenMonths * 32

  // The remainder of 7 to check days before this month
  const daysBefore = (daysSelectedYear + totalYearsDays) % 7

  // Check days after
  const daysAfter = 7 - ((daysBefore + monthDays) % 7)

  // So lastmonthDays minus daysbefore should be when the new row starts, then the monthdays, and then what is left with remainder of 7
  let startDay = lastMonthDays - daysBefore + 1

  const currentMonthDays = []

  // Add weekdays from previousmonth
  for (let i = startDay; i <= lastMonthDays; i++) {
    currentMonthDays.push(i)
  }

  // Add weekdays from current month
  for (let i = 1; i <= monthDays; i++) {
    currentMonthDays.push(i)
  }

  // Add weekdays from next month
  if (daysAfter !== 7) {
    for (let i = 1; i <= daysAfter; i++) {
      currentMonthDays.push(i)
    }
  }

  return [...currentMonthDays]
}
