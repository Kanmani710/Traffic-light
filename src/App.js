import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [red,setred]=useState(false);
const [yellow,setyellow]=useState(false);
const [green,setgreen]=useState(false);
  return (
    <div class="con">
      
    <div className="container">
      <h1>Traffic Signal..!</h1>
      <div className="border">
        <div className={red ? "circle red" : "circle gray"} id="stop"></div>
        <div className={yellow ? "circle yellow" : "circle gray"} id="ready"></div>
        <div className={green ? "circle green" : "circle gray"} id="go"></div>
      </div>

      <div className="button">
      <div id="button1" onClick={() => { setred(true); setyellow(false); setgreen(false); }}>Stop</div>
      <div id="button2" onClick={() => { setred(false); setyellow(true); setgreen(false); }}>Ready</div>
      <div id="button3" onClick={() => { setred(false); setyellow(false); setgreen(true); }}>Go</div>

      </div>

    </div>
    </div>
  );
}

export default App;