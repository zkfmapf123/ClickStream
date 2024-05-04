import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as RTKProvider } from "react-redux";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import store from "./redux/store/store";
import { v4 as uuid4 } from "uuid";

const generateAndSaveUniqueId = () => {
  const uniqId = uuid4();
  sessionStorage.setItem("userId", uniqId);
};

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
