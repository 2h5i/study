var a = 1;
function outer() {
  console.log(a); //1 - 1
  function inner() {
    console.log(a); //2 - undefined
    var a = 3;
  }

  inner();
  console.log(a); //3 - 1
}
outer();
console.log(a); //4 - 1

/*
전역 실행컨텍스트 생성
변수 a 선언
함수 outer 선언
변수 a 에 1 할당
outer함수 호출 -> outer실행컨텍스트 생성
outer scope 에서 a 탐색-> globalscope 에서 a 탐색 ->1출력
inner함수 호출 -> inner 실행컨텍스트 생성
변수 a 선언
inner scope에서 a 탐색 -> undefined 출력
변수 a에 3 할당
inner 종료
outer scope에서 a 탐색 -> global scope에서 a 탐색 -> 1출력
outer 종료
global에서 a 탐색 -> 1 출력
전역 실행컨텍스트 종료
*/
