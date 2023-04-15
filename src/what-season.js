const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // if (!date) {
  //   return "Unable to determine the time of year!";
  // } else if (!(date instanceof Date) || isNaN(date.getTime())) {
  //   throw new Error("Invalid date!");
  // } else if (Object.prototype.toString.call(date) !== '[object Date]' && !Object.getOwnPropertyNames(date).includes('getMonth')) {
  //   throw new Error("Invalid date!");
  // } else {
  //   const month = date.getMonth(); // Get the month as an integer (0 to 11)
  //   if (month === 11 || month === 0 || month === 1) {
  //     return "winter";
  //   } else if (month >= 2 && month <= 4) {
  //     return "spring";
  //   } else if (month >= 5 && month <= 7) {
  //     return "summer";
  //   } else {
  //     return "autumn";
  //   }
  // }
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason
};
