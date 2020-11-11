const a = require('./var');

//다른 파일을 실행만 하고 그 안의 변수를 가져오고 싶지는 않다 => require('./var'); 만 해도됨
//require.main 으로 어떤 파일을 실행한건지 알아 낼 수 있다
//한번 require 한 것은 캐싱함. require.cache 안에 저장함
//require에서 두번째 불러오게 되면 파일을 읽는 것이 아니라 cache에 저장되어 있는 사항을 불러옴
//require.cache 를 적절히 사용하면 node를 껐다 켜지 않아도 실시간으로 코드가 업데이트 되도록 할 수 있음
//require는 가장 위에 올 필요는 없음
//import는 가장 위에 있어야 함
