const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var arr=matrix.flat(Infinity);
  let kotik=0;
  arr.forEach((element) => {
 if(element === '^^') kotik++;
})
return kotik;
};
