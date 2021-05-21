## 기능목록

### 🎯 step1

#### 회원 기능

- [ ] 유저는 회원가입을 할 수 있다.
  - [ ] 각 인풋에 대한 검증 기준을 부여하고, 기준에 부합하지 않으면 에러 메시지를 렌더링한다.
    - [ ] email은 이메일 형식을 허용한다.
    - [ ] name은 한글, 영어, 숫자만 허용한다.
    - [ ] password는 최소 6자이상, 영숫자 및 특수문자의 조합으로 이루어져야 한다.
    - [ ] 비밀번호 확인은 비밀번호 입력과 일치해야 한다.
- [ ] 유저는 로그인을 할 수 있다.
  - [ ] API를 요청해서 로그인 성공 여부를 확인한다.
  - [ ] 로그인이 실패하면, 다음과 같은 처리를 이행한다.
    - [ ] password 삭제 및 포커싱
    - [ ] input 하단의 에러 메시지 렌더링
- [ ] 로그인하고 나면 로그인 버튼은 로그아웃 버튼으로 변경 된다.
- [ ] 로그인한 유저만 모든 기능을 조회할 수 있다.
- [ ] 유저는 로그아웃 할 수 있다.
  - [ ] 로그아웃시 `/` 루트 페이지로 돌아 온다.

#### 역 관리

- [ ] 지하철역을 등록할 수 있다.
  - [ ] 지하철역은 2 ~ 20글자 사이여야 한다. (only 한글, 숫자)
  - [ ] 엔터키 또는 마우스 클릭으로 역을 추가할 수 있어야 한다.
  - [ ] 중복된 지하철역은 추가할 수 없다.
- [ ] 지하철역을 삭제할 수 있다.
  - [ ] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.
  - [ ] 이미 노선에 등록된 역인 경우 삭제할 수 없다.

#### 노선 관리

- [ ] 지하철 노선을 등록할 수 있다.
  - [ ] 지하철 노선의 이름은 2~10 글자 사이여야 한다. (only 한글, 숫자)
  - [ ] 중복된 지하철 노선 이름이 등록될 수 없다.
- [ ] 지하철 노선을 삭제할 수 있다.
  - [ ] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.

#### 구간 관리

- [ ] 특정 노선의 전체 구간을 볼 수 있다.
- [ ] 지하철 노선 구간을 추가할 수 있다.
  - 예외사항
    - [ ] 이미 중복된 구간이 있는 경우
    - [ ] 상행역이 기존 구간의 상행역과 같지만 하행역과의 거리, 시간이 더 클 경우
- [ ] 구간을 삭제할 수 있다.
  - 예외사항
    - [ ] 구간이 한 개 남아있을 때는 삭제할 수 없다.

## 테스트 케이스

### 🎯 step1

- [ ] 회원가입 시, 각 인풋에 대한 기준이 부합하지 않으면 에러 메시지를 렌더링한다.
  - [ ] email은 이메일 형식을 허용한다.
  - [ ] name은 한글, 영어, 숫자만 허용한다.
  - [ ] password는 최소 6자이상, 영숫자 및 특수문자의 조합으로 이루어져야 한다.
- [ ] 로그인 실패 시, 에러 메시지를 렌더링한다.
- [ ] 로그인 성공 시, 메뉴 버튼들과 로그아웃 버튼이 화면에 노출되고 메인 페이지로 이동한다.

#### 역 관리

- [ ] 역 추가 시, 역이름이 2 ~ 20글자가 아니면 에러 메시지를 렌더링한다.
- [ ] 지하철 역을 등록할 수 있다. (jest)
- [ ] 지하철 역 이름을 삭제할 수 있다. (jest)

#### 노선 관리

- [ ] 노선 추가 시, 노선 이름이 2 ~ 10글자가 아니면 에러 메시지를 렌더링한다.
- [ ] 노선을 등록할 수 있다. (jest)
- [ ] 노선 이름을 삭제할 수 있다. (jest)

#### 구간 관리

- [ ] 구간을 등록할 수 있다.
- [ ] 구간을 삭제할 수 있다.