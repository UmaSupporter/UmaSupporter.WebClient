# Umamusume Supporter Client
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ee9162c-4267-44a3-a938-a3593d29e261/deploy-status)](https://app.netlify.com/sites/dreamy-northcutt-cfb2f0/deploys)

이 프로젝트는 [우마서포터](https://uma.sonagi.dev)의 프론트엔드 클라이언트입니다.
[Netlify](https://netlify.com)에 의해 서빙되고 있습니다.

백엔드 서버는 [umamusume-server](https://github.com/riemannulus/umamusume-server) 를 참고해 주세요.

## 개발환경
이 저장소는 [yarn](https://yarnpkg.com)을 사용하고 있습니다.
이 프로젝트에 기여하기 위한 개발환경 셋업은 다음 순서를 따라 주십시오.

1. yarn과 node를 설치한 PC에서 다음 명령어를 입력합니다.
```
yarn install
```
2. 실행시켜 주십시오.
```
yarn start
```

이제 코드베이스가 변경될 경우 자동으로 watch하여 화면에 반영될 것입니다.

## 프로덕션 빌드
main 브랜치에 머지되면 자동으로 [우마서포터](https://uma.sonagi.dev)에 올라가게 됩니다.
