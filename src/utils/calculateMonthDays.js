const calculateMonthDays = month => {
  // decide days for the even and off months
  const monthDays = month % 2 === 0 ? 32 : 33
  const lastMonthDays = monthDays === 32 ? 33 : 32
  const oddMonths = Math.ceil(month / 2)
  const evenMonths = month - oddMonths

  // total days that have passed in the year
  const days = oddMonths * 33 + evenMonths * 32

  // the remainder of 7 to check days before this month
  const daysBefore = days % 7

  // check days after
  const daysAfter = 7 - daysBefore

  // check which daynumber the first Monday would be
  const firstSundayOftheMonth = ((monthDays + daysAfter) % 35) + 1

  // which day will the calendar view start
  let startDayNumber =
    firstSundayOftheMonth !== 1
      ? lastMonthDays - (7 - firstSundayOftheMonth)
      : firstSundayOftheMonth

  const daysBeforeArr = []
  if (startDayNumber !== 1) {
    for (let i = startDayNumber; i <= lastMonthDays; i++) {
      daysBeforeArr.push(i)
    }
  }

  const daysArr = []
  for (let i = 1; i <= monthDays; i++) {
    daysArr.push(i)
  }

  const daysAfterArr = []
  if (daysAfter !== 7) {
    for (let i = 1; i <= daysAfter; i++) {
      daysAfterArr.push(i)
    }
  }

  return {
    lastMonthDays,
    startDayNumber,
    daysBeforeArr,
    daysArr,
    daysAfterArr,
    firstSundayOftheMonth
  }
}
