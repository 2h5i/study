console.log(this); //global x -> 전역변수에 있는 this 는 빈 객체 === module.exports
// -> this.odd = odd , this.even = even 가능

function a() {
  console.log(this === global); //함수 안에 있는 this는 global
}

a();
