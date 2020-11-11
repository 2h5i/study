const os = require('os'); // 운영체제에 대한 정보
//process와 어느정도 겹침

console.log(os.cpus()); //cpu에 대한 정보
//나중에 서버를 띄울 때 기본적으로 싱글 스레드면 그 중 하나를 사용함.
//나머지 놀고 있는 cpu 숫자를 알기 위해
