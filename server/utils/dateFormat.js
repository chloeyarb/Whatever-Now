const dayjs = require('dayjs');

module.exports = (date) => {
  const formattedDate = dayjs(date).format('MM/DD/YY');

  return `${formattedDate}`;
}