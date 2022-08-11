import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import colors from './components/colors';
import React from "react";
import './components/Quotebox.css'
import { useState,useEffect } from "react";


function App() {
  
  const [numero, setNumero] = useState(0);
  const [frase, setFrase] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("black");

  
  useEffect(()=>{
      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((rta)=>rta.json())
      .then((res)=>{
      setFrase(res.quotes[numero].quote);
      setAuthor(res.quotes[numero].author);})
  },[numero])

  function numeroRandom(e){
  var colorelegido = colors[Math.floor(Math.random() * colors.length)];
  console.log(e,colorelegido);
  setNumero(Math.floor(Math.random() * 100));
  setColor(colorelegido)
  
}
  
  return (
    <div className="App"  style={{backgroundColor:color}}> 
      <div id='quote-box'>
        <h1 id="text" >"{frase}"</h1>
        <div id="author">- {author}</div>
        <div className="cajaBoton">
            <div id="redes">
                <Button id="botonRed" className="button" style={{backgroundColor:color}}><a id='tweet-quote' href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='  target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></Button>
                <Button id="botonRed" className="button" style={{backgroundColor:color}}>F</Button>
            </div>
        <Button id='new-quote' className="button" onClick={numeroRandom} style={{backgroundColor:color}}>New Quote</Button>
        </div>    
    </div>
    </div>
  );
}

export default App;