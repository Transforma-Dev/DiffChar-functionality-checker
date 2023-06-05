import React, { useState } from "react";
import "../components/LeftPanel.css";
// import Correction from "./Correction";
import { diff_match_patch } from "diff-match-patch";

export default function LeftPanel() {
  var dmp = new diff_match_patch();

  let value1 =
    " I am the very model of a modern Major-General, I've information vegetable, animal, and mineral, I know the kings of England, and I quote the fights historical, From Marathon to Waterloo, in order categorical";
  let value2 =
    "I am the very model of a cartoon individual,My animation's comical, unusual, and whimsical,I'm quite adept at funny gags, comedic theory I have read,From wicked puns and stupid jokes to anvils that drop on your head.";
  const [acutaltext, setActualText] = useState(value1);
  const [difftext, setDiffText] = useState(value2);
  const [method, setMethod] = useState("main");

  const handleClick = (e) => {
    setMethod(e.target.value);
  };

  function diffchecker() {
    var d = dmp.diff_main(acutaltext, difftext);

    if (method === "semantic") {
      dmp.diff_cleanupSemantic(d);
    }
    if (method === "efficiency") {
      dmp.diff_cleanupEfficiency(d);
    }
    if (method === "levenshtein") {
      let levenshtein_value = dmp.diff_levenshtein(d);
      document.querySelector(".output-container").innerHTML =
        dmp.diff_prettyHtml(d) + " Levenshtein distance : " + levenshtein_value;
    } else {
      document.querySelector(".output-container").innerHTML =
        dmp.diff_prettyHtml(d);
    }
  }

  return (
    <div className="outer-container">
      <div className="header">
        <h1>Diff Match and Patch</h1>
        <p>
          Diff takes two inputs, compares them and output's their difference,
        </p>
      </div>
      <div className="textarea">
        <div className="textbox">
          <label>Text field 1</label>
          <textarea
            className="textarea1"
            rows={20}
            onChange={(e) => setActualText(e.target.value)}
            defaultValue={acutaltext}
          ></textarea>
        </div>
        <div className="textbox">
          <label>Text field 2</label>
          <textarea
            className="textarea2"
            onChange={(e) => setDiffText(e.target.value)}
            defaultValue={difftext}
          ></textarea>
        </div>
      </div>
      <div className="method-section">
        <div className="method">
          <h3>Select your method:</h3>
          <dl>
            <dt>
              <input
                type="radio"
                name="diffmain"
                value="main"
                onChange={handleClick}
                checked={method === "main"}
              ></input>
              <label>Diff-main</label>
            </dt>
            <dt>
              <input
                type="radio"
                name="diffmain"
                value="semantic"
                onChange={handleClick}
                checked={method === "semantic"}
              ></input>
              <label>Diff-cleanup Semantic</label>
            </dt>
            <dt>
              <input
                type="radio"
                name="diffmain"
                value="efficiency"
                onChange={handleClick}
                checked={method === "efficiency"}
              ></input>
              <label>Diff-cleanup Efficiency</label>
            </dt>
            <dt>
              <input
                type="radio"
                name="diffmain"
                value="levenshtein"
                onChange={handleClick}
                checked={method === "levenshtein"}
              ></input>
              <label>Diff-levenshtein</label>
            </dt>
          </dl>
        </div>
        <div className="timeset">
          <button onClick={diffchecker} className="diff-btn">
            Find Difference
          </button>
        </div>
        <div className="output-container"></div>
      </div>
      {/* <div className="output-section">
            <div className="output-container">
                
            </div>
        </div> */}
    </div>
  );
}
