import React from "react";
import '../components/Correction.css'

export default function Correction(props){

    var correction = props.results;

    const handleChange = (e) => {
        props.setMode(e.target.index)
    }

    return(
        <>
        <h2 className="heading">Check to see the difference between various diff methods</h2>
        <p className="desc">The box below displays the output, that diff sends as a change is done on the actual value.</p>
        <p className="info">Edit the content on the editor to see output</p>
        <div className="correction-box">
            {correction.map((a, i) => {
                return(
              <li key={i}>{a.value}</li>  
                )
            })}
        </div>

        <div className="select-mode">
            <p>Select the diff method: </p>
            <select>
                <option value='diffChars' onClick={handleChange}>diffChars</option>
                <option value='diffWords' onClick={handleChange}>diffWords</option>
                <option value='diffLines' onClick={handleChange}>diffLines</option>
                <option value='diffSentences' onClick={handleChange}>diffSentences</option>
            </select>
        </div>
        <button className="clear-btn" onClick ={() => window.location.reload()}>Refresh content</button>
        </>
        
    )
}