# DAY2

- 노드 내장 객체

  - \_\_filename : 현재 파일 경로
  - \_\_dirname : 현재 폴더(디렉터리) 경로

  - exports & this

  - exports
    - module.exports = { odd, even} = exports.odd=odd, exports.even = even
    - module.exports === exports = {}
    - exports에 함수를 바로 넣을수는 없음
  - this -> this.js

  - 모듈 심화, 순환 참조
  - require 의 특성 -> require.js
  - 순환참조 -> dep1.js, dep2.js 의 상황이 생기면 순환참조가 일어난다
    - 순환참조가 일어나면 빈 객체로 만들어 버리게 된다. 그렇지 않으면 무한 참조가 일어나기 때문에!노드가 무한 참조를 차단하기 위해!
  - process
  - 현재 실행중인 노드 프로세스에 대한 정보를 담고있음!
  - node 실행 후 process 쳐보기
  - process.pid -> 프로세스 강제 종료 위해
  - process.uptime() -> 실행시간
  - process.cpuUsage() -> 현재 cpu 사용량
  - process.cwd() -> 현재 프로세스가 실행되는 위치 ---- 이건 좀 많이 사용함
  - process.env
  - 시스템 환경 변수들이 들어있는 객체
  - 비밀키를 보관하는 용도로 사용됨 ex) const secretCode = process.env.SECRET_CODE;
  - 일부 환경변수는 노드 실행시 영향을 미침
  - ex) NODE_OPTIONS, UV_THREADPOOL_SIZE ( 노드 실행 옵션, 스레드풀 개수)
  - process.nextTick()
    - 이벤트 루프가 다른 콜백 함수들보다 nextTick 의 콜백 함수를 우선적으로 처리한다 -> nextTick.js
  - process.exit()
    - node 프로세스 종료
    - process.exit(0) -> 에러 없이 꺼짐 , process.exit(1) -> 에러가남, 에러가 있음을 알리고 끄기 위해

- node 내장 모듈
  - os -> os.js
    - nodejs.org -> apidoc -> os 공식 문서
  - path -> path.js
