# 핀투게더 (Pin-to-Gather)

핀투게더는 사용자가 함께 지도를 공유하며 실시간으로 서로가 보고 있는 구역과 지역들을 참조하여 여행이나 만남 일정을 정할 수 있는 서비스입니다.

## 기술 스택

Next.js, React, TypeScript, NaverMaps, WebSocket, Emotion, Turborepo, pnpm

## 주요 기능

- **지역 검색**: 특정 지역을 검색하여 관련 정보를 얻을 수 있습니다.
- **실시간 지도 공유**: 사용자가 현재 보고 있는 지도의 구역을 다른 사용자와 실시간으로 공유할 수 있습니다.
- **실시간 핀 공유**: 사용자가 현재 보고 있는 상호 및 건물, 주소를 다른 사용자와 실시간으로 공유할 수 있습니다.
- **공유 핀 저장**: 지도에 참여한 모든 사용자에게 공유되는 핀들을 저장할 수 있습니다.
- **일정 계획**: 지도의 공유 핀을 이용하여 여행이나 만남 일정을 계획할 수 있습니다.

## 설치 및 실행

### 요구 사항

- Node.js 20.15.1 이상
- pnpm

### 설치

```sh
git clone https://github.com/Todari/pin-to-gather.git
cd pin-to-gather
pnpm install
```

### 개발 서버 실행

```sh
turbo dev
```

### 빌드

```sh
turbo build
```

## 디렉토리 구조

- `apps/docs`: 웹 애플리케이션에 대한 문서
- `apps/landing`: 랜딩 페이지
- `apps/web`: 메인 웹 애플리케이션
- `packages/ui`: 공통 UI 컴포넌트 라이브러리
- `packages/eslint-config`: ESLint 설정
- `packages/typescript-config`: TypeScript 설정

## 기여 방법

1. 이슈를 생성합니다.
2. 이 저장소를 포크합니다.
3. 새로운 브랜치를 생성합니다. (`git checkout -b feature/#{이슈번호}`)
4. 변경 사항을 커밋합니다. (`git commit -am 'Add new feature'`)
5. 브랜치에 푸시합니다. (`git push origin feature/#{이슈번호}`)
6. dev 브랜치로 Pull Request를 생성합니다.

## 문의

질문이나 제안 사항이 있으시면 [이슈](https://github.com/Todari/pin-to-gather/issues) 페이지를 통해 문의해 주세요.
