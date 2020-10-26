const { odd, even } = require('./var');
console.log(value);

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

checkOddOrEven(2);

module.exports = checkOddOrEven;

//module.exports 는 파일에서 단 한번만 사용한다.
