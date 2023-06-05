import React, { useEffect, useState } from "react";
import "./App.css";
import Actual from "./components/Actual";
import Tex from "../src/sample.tex";
import LeftPanel from "./components/LeftPanel";
import { Route, Routes } from "react-router-dom";
// import MainPage from "./components/MainPage";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(Tex)
      .then((res) => res.text())
      .then((res) => setText(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<LeftPanel data={text} />} />
        <Route path="diff2" element={<Actual text={text} />} />
      </Routes>
    </>
  );
}

export default App;
