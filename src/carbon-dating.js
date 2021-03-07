const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(Number(sampleActivity))) return false;
  sampleActivity = parseFloat(sampleActivity);

  let t = Math.ceil(Math.log(15 / sampleActivity) / (0.693 / 5730));

  return t >= 0 && t < Infinity ? t : false;
}
