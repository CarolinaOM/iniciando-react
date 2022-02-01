import React from 'react';
import './App.css';

function Helloworld(props){
  console.log(props)
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}

function App() {
  return (
    <div>This is my componet: 
      <Helloworld mytext="Hello" subtitle="loremp" /> 
      <Helloworld mytext="Hola" subtitle="loremp 2" /> 
      <Helloworld mytext="Hello!" subtitle="loremp 3" /> 
    </div>
  );
}

export default App;
