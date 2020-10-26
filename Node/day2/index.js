const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(2));
console.log(checkStringOddOrEven('hello'));

//module.exprot 와 export default
//import 와 require
//는 동작이 다르다. 완전히 같지 않음
//무조건 1대1 대응으로 바꾸면 안됨.
