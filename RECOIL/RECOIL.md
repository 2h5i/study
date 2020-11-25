## Recoil

- 기존의 상태 관리 라이브러리에 이상이 있는것은 x
- 그러나 기존 상태 관리 라이브러리들이 React 라이브러리가 아니다. Store는 "외부요인"으로 취급되는 것이기 때문에 React 내부 스케줄러에 접근할 수 없었다.

  - 이는 동시성 모드가 등장하며 중요해졌다.(Recil은 내부적으로 React의 상태를 사용하고 있으며, 동시성 모드에 대한 지원 곧 추가 예정)
  - redux등의 라이브러리는 기본적인 store 구성을 위해 많은 보일러 플레이트와 장황한 코드 작성해야함.
  - 비동기 데이터 처리 또는 계산된 값 캐시와 같은 중요한 기능은 라이브러리의 기능이 아니어서 이를 해결하기 위해 또 다른 라이브러리 사용해야함

- CONTEXT API 와의 비교

  - Context는 낮은 빈도의 업데이트에 적합. Flux와 같은 상태 관리 시스템을 대체할 수 없다.
  - Provider 하위의 모든 consumer들은 Provider 속성이 변경될 때마다 다시 렌더링 됨.
  - Provider의 값이 배열이나 객체인 경우 구조가 조금이라도 변경 -> 그 Context를 구독하고 있는 하위의 모든 것이 다시 렌더링 된다.
  - 이는 성능에도 좋지 않고 Provider와 컴포넌트 트리 노드 사이에 강한 커플링이 생긴다.

- Recoil의 차이점

  - 배우기 쉽다. hook을 사용하고 있는 사람들에게 익숙
  - 컴포넌트가 사용하는 데이터 조각만 사용할 수 있고, 계산된 selector를 선언할 수 있으며, 비동기 데이터흐름을 위한 내장 솔루션까지 제공
  - 곧 React 동시성모드에 대한 지원 될 예정

- Recoil 기본
  - Atom
    - 하나의 상태.
    - 컴포넌트가 구독할 수 있는 React state라고 생각.
    - atom의 값을 변경하면 그것을 구독하고 있는 컴포넌트들이 모두 다시 렌더링된다.
    - atom 생성 위해 어플리케이션에서 고유한 키값과 디폴트값 설정해야함.
    - default값은 정적인 값, 함수가 될 수 있다
  - useRecoilState
    - atom의 값을 구독하여 업데이트 할 수 있는 hook. useState와 동일한 방식으로 사용할 수 있다.
  - useRecoilValue
    - setter 함수 없이 atom의 값을 반환만 한다.
  - useSetRecoilState
    - setter 함수만 반환.
  - selector
  - 상태에서 파생된 데이터
  - 다른 atom에 의존하는 동적인 데이터를 만들 수 있게 해준다.
  - 기존에 알던 selector의 개념과 다름
  - Redux - reselect / MobX - @computed 처럼 동작하는 "get"함수 가지고 있음.
  - 하나 이상의 atom을 업데이트 할 수 있는 "set" 함수를 옵션으로 받을 수 있음

\*Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다. Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것입니다. (하지만 이미 짜놓은 컴포넌트를 모조리 재작성하는 것은 권장하지 않습니다. 대신 새로 작성하는 컴포넌트부터는 Hook을 이용하시면 됩니다.)

참고 : https://ui.toast.com/weekly-pick/ko_20200616
