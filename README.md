# Vegetas

**채식 식당 위치 알림 모바일 어플리케이션입니다.**

서울 경기권을 중심으로 채식을 즐길 수 있는 식당 위치를 검색할 수 있습니다.

### 기본 환경 설치

<ul>
<li>yarn@latest</li>
<li>node@latest</li>
</ul>

### Package Install

- `root`(VEGETAS), 클라이언트, 서버 폴더 별로 `npm install` or `yarn`으로 설치합니다.

  ```
  $ cd vegetas-client
  $ npm install
  $ npm start
  ```

### Package Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [geolib](https://www.npmjs.com/package/geolib)
- [express](https://www.npmjs.com/package/express)
- [react-navigation](https://www.npmjs.com/package/react-navigation)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [sequelize](https://www.npmjs.com/package/sequelize)

## Project Description

구글 플레이 스토어에서 다운 받으실 수 있습니다. vegetas [해당링크](https://play.google.com/store/apps/details?id=com.vegetas.gunbam)

![vegetas-function1](https://media.giphy.com/media/j2vnFCMKDXqMATLmtO/giphy.gif)

> - 회원가입/로그인 후 유저에게 맞는 채식 유형을 선택하고 해당 위치에서 거리 별로 식당 데이터를 가져옵니다.
> - 지도 맵을 활용해 현재 위치를 중심으로 식당 위치를 파악할 수 있습니다.

![vegetas-function2](https://media.giphy.com/media/jpbjd1xwD4c6aOUuqG/giphy.gif)

> - 자주 가는 식당을 즐겨찾기에 추가할 수 있습니다.

## Component

![vegetas_component](https://user-images.githubusercontent.com/29101760/55876472-b5a10800-5bd2-11e9-89db-9ea8e7ad8acd.png)

- User Page

  > 비밀번호 변경/로그아웃/채식유형 변경/즐겨찾기 페이지를 나타내주는 컴포넌트

- Map View

  > 현재 위치에서 거리별로 식당을 나타내주는 컴포넌트

- Search

  > 식당과 주요 메뉴를 검색할 수 있는 기능

- Change Distance

  > 거리 별로 식당을 나타내주는 기능

- MainRestaurantInfo

  > 거리 별로 필터된 데이터를 나타내주는 컴포넌트

- RestaurantDetails

  > 각 식당 별 상세 내역을 나타내주는 컴포넌트

- Favorite Restaurant

  > 즐겨찾기 기능

- Current Restaurant Position

  > 현재 식당 위치를 나타내주는 기능

- Restaurant Phone Number

  > 현재 식당으로 연락할 수 있는 기능

## DB Schema

![vegetas db schema](https://user-images.githubusercontent.com/29101760/55860794-f89db400-5baf-11e9-83c2-449e31f9df3f.png)
