import React, { useEffect, useState } from 'react';
import './App.css';
import Actual from './components/Actual';
import Tex from '../src/sample.tex'
import LeftPanel from './components/LeftPanel';

function App() {
const [text, setText] = useState('')
  
useEffect(() => {
    fetch(Tex).then(res => res.text()).then(res => setText(res)).catch(err => console.error(err));
},[])

  return (
    <div className="App show">
      <p className='alert'>Please switch to landscape view</p>
      <Actual text = {text}/>
      {/* <LeftPanel data={text}/> */}
    </div>
  );
}

export default App
