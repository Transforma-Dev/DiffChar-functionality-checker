import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import MainPage from "./components/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <MainPage />
    <App />
  </HashRouter>
);
