const Seasons = {
  1: 'winter',
  2: 'winter',
  3: 'spring',
  4: 'spring',
  5: 'spring',
  6: 'summer',
  7: 'summer',
  8: 'summer',
  9: 'autumn',
  10: 'autumn',
  11: 'autumn',
  12: 'winter'
};
const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  try{let result='';
  if(date===undefined)
    return 'Unable to determine the time of year!';
  for (let key in Seasons) {
    if(key === month(date)) result.push(`${Seasons[key]}`);
}
return result;}
catch(e){
    throw new CustomError('Not implemented');
}
}
