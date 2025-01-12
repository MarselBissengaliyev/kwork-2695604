export const formatOpeningHours = (list) => {
  const dayOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]

  let hours = []

  list.forEach(({ day_of_week, opens, closes, closed }) => {
    let days = day_of_week
    if (typeof days === 'string') {
      days = [days]
    }
    days.forEach((day) => {
      hours.push({
        day,
        opens,
        closes,
        closed,
      })
    })
  })

  console.log(JSON.stringify({ input: list, output: hours }, null, 2))

  // Sort the results
  hours.sort((a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day))

  // Format the results
  let output = hours.map(({ day, opens, closes, closed }) => {
    if (closed) {
      return { day, closed }
    } else {
      return { day, opens, closes }
    }
  })

  return output
}

export const getPagination = ({ page = 1, take = 10, results = 0 }) => {
  const pages = results >= 1 ? Math.ceil(results / take) : 0

  return {
    page: page > 1 ? page : 1,
    pages,
    results,
    take,
    skip: page > 1 ? take * (page - 1) : 0,
    next: page < pages,
    prev: page > 1,
  }
}
