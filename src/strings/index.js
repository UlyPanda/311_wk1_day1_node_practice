const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
let arrOfPairs = [];
for(let i = 0; i < str.length; i += 2){
  arrOfPairs.push(str.slice(i, i + 2));
}
return arrOfPairs;
}

const reverse = (str) => {
  // write code for strings.reverse
let splitStr = str.split('');
let revStr = splitStr.reverse();
let joinStr = revStr.join('');

return joinStr;
}

module.exports = {
  split,
  pairs,
  reverse
}