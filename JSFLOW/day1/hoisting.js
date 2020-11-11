console.log(a());
console.log(b());
console.log(c());

function a() {
  // 함수 선언문
  return 'a';
}
var b = function bb() {
  //기명 함수 표현식
  return 'bb';
};
var c = function () {
  //(익명)함수 표현식
  return 'a';
};
//->변수 c 선언->익명함수 선언->변수c에 익명함수를 할당

//위의 코드 실행 시 실제 동작 순서는 아래와 같다.

function a() {
  return 'a';
}

var b;
var c;

console.log(a());
console.log(b());
console.log(c());

b = function bb() {
  return 'bb';
};
c = function () {
  return 'a';
};
