import React, { useEffect, useState } from "react";
import '../components/Actual.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { diffChars, diffLines, diffSentences, diffWords } from "diff";
import Correction from "./Correction";

export default function Actual({text}) {

    useEffect(() => {
        setDefaultValue(text)
    },[text])

    const [defaultvalue, setDefaultValue] = useState(text);

    let [array, setArray] = useState([]);

    const [mode , setMode] = useState(0);

    var modes = [diffChars, diffWords, diffLines, diffSentences];

    let handlechange = (eve) => {
       
        let res = modes[mode](text, eve);

        var getall=[];
       
        res.forEach((diff) => {
            if(diff.added){
                getall.push({type: 'Added', value: diff.value});
            }
            else if(diff.removed){
                getall.push({type: 'Deleted',value:diff.value});
            }
        })

        setDefaultValue(eve)

        setArray(getall);
    } 

        return (
            <div className="main-container">
                <div className="left-panel">
                    <div className="actualcontainer">
                        <AceEditor
                        mode='latex'
                        theme='github'
                        value={defaultvalue}
                        onChange={handlechange}
                        name="tex-editor"
                        wrapEnabled={true}
                        height="100%"
                        width="100%"
                        fontSize='16px'
                        editorProps={{ $blockScrolling: true }}
                        />
                    </div>
                </div>
                
                <div className="right-panel">
                    <Correction results = {array} setMode = {setMode}/>
                </div>
            </div>
        )
    }
    


