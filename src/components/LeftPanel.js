import React, { useState } from "react";
import '../components/LeftPanel.css'
import Correction from "./Correction";
import { diffChars } from "diff";


export default function LeftPanel({data}){

    var actualdata = data.toString();

    const [correction, setCorrections] = useState([]);
    const [inputdata, setInputData] = useState('');

    
        function onChange(event){
        
            let res = diffChars(actualdata, event);

            let correction = []

            res.forEach((diff) => {
                if(diff.added){
                    correction.push(diff.value)
                }else if (diff.removed){
                    correction.push(diff.value)
                }
            })
            setCorrections(correction)
    }

    function handleChange(e){
        let input = e.target.value.toString();
        setInputData(input)
    }

    return (
        <div className="main-outer">
        <div className="left">
            <input type="text" onChange={handleChange}></input>
            <div className="inner-actual">
                <p className="inner-p">{inputdata}</p>
            </div>
            <div className="inner-change">
                <textarea onChange={onChange}>{inputdata}</textarea>
            </div>
        </div>
        <div className="right-panel">
        <Correction corrections={correction}/>
         </div>
    </div>
    )
}