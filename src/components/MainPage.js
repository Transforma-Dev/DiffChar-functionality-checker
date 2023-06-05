import React from "react";
import { Link } from "react-router-dom";
import "../components/MainPage.css";

const MainPage = () => {
  return (
    <div className="nav-bar">
      <div className="link">
        <Link to="diff2">
          <button className="link-btn">Diff</button>
        </Link>
      </div>
      <div className="link">
        <Link to="/DiffChar-functionality-checker" className="link-btn">
          <button className="link-btn">Diff,Match and Patch</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
