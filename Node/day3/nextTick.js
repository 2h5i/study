setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

//실행결과 : nextTick -> promise -> timeout -> immediate
//immediate , timeout 은 누가 먼저 실행될지모름. 환경에 따라 어떤 때는 imm, 어떤때는 timeout 0
