export const average = (list) =>
  list?.length
    ? parseFloat((list.reduce((a, b) => a + b) / list.length).toFixed(2))
    : 0
