# ClickStream made with Terraform

![1](./public/1.png)

## Todo

- [x] Front ECS
- [x] Lambda Functions
- [x] Connect Lambda ALB
- [ ] SQS
- [ ] Connect SQS Lambda
- [ ] Ingest S3

## 구성 방법

```sh
    ## front build && docker push
    make upload-fe

    ## lambda build 
    make lambda-build

    ## Infra Settings
    make setting

```

## ClickStream

... 

## Frontend Unique Id

### 브라우저내의 진입한 유저 Unique ID 설정

```ts
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as RTKProvider } from "react-redux";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import store from "./redux/store/store";
import { v4 as uuid4 } from "uuid";

// added
const generateAndSaveUniqueId = () => {
  const uniqId = uuid4();
  sessionStorage.setItem("userId", uniqId);
};

// added
if (!sessionStorage.getItem("userId")) {
  generateAndSaveUniqueId();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RTKProvider store={store}>
    <GlobalStyle />
    <App />
  </RTKProvider>
);
```


## Reference 

- <a href="https://registry.terraform.io/modules/zkfmapf123/vpc3tier/lee/latest"> terraform vpc3tier module </a>
- <a href="https://registry.terraform.io/modules/zkfmapf123/ecs-fargate/lee/latest"> terraform ecs module </a>
- <a href="https://aws.amazon.com/ko/blogs/korea/new-solution-clickstream-analytics-on-aws-for-mobile-and-web-applications/"> ClickStream  Documents </a>