- url 과 querystring
  - nodejs.org -> url
  - queryString -> searchParams
- crypto (단방향 암호화)

  - 단방향 암호화의 대표 주자는 해시 기법
  - 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식
    - Hash 사용하기
      - createHash ( 알고리즘) : 사용할 해시 알고리즘을 넣어준다
      - md5, sha1, sha256, sha512 등이 가능하지만 md5와 sha1 는 이미 취약점 발견됨
  - update(문자열) : 변화할 문자열을 넣어준다
  - digest(인코딩) : 인코딩할 알고리즘을 넣어준다
  - Node는 pbkdf2나 scrypt 지원
  - pbkdf2 는 salt와 pwd를 같이 저장해야함

- 양방향 암호화

  - 대칭형 암호화(암혼문 복호화 가능)
  - Key가 사용됨
  - 암호화할 때와 복호화 할 때 같은 Key를 사용해야함

- util

  - 각종 편의 기능을 모아둔 모듈
  - deprecated와 promisify가 자주 쓰임
  - deprecated로 감싸면 기존 코드를 사용하지 말라고 경고를 해줄 수 있음 / 버전 올리면서 삭제할때
  - pomisify로 callback함수를 감싸면 프로미스로 바꿀 수 있음. 단 콜백이 (err,data)=>{} 형식이어야함

- worker_threads
  - node에서 멀티스레드 사용할 일은 거의 없음. 대부분 싱글스레드 위주로 생각하면됨.
  - worker_threads.js
