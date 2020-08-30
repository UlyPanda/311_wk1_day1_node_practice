// import moment here; use this package in each function
const moment = require("moment");
moment().format();

const today = () => {
  // write code for dates.today
moment().format('[today] dddd');
}

const calendar = () => {
  // write code for dates.calendar
moment().format('MMM:DD:YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
moment().format('hh:mm:ss a');
}

module.exports = {
  today,
  calendar,
  currentTime
}