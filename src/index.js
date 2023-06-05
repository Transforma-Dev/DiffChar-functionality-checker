import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainPage />
    <App />
  </BrowserRouter>
);
