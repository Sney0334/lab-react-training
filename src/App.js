import React from 'react';
import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor"


const data = [
  { 
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height:178,
      birth:"1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"},
  {
      lastName:'Delores',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth:"1988-05-11",
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]


function App() {
  
  return (
    <div className="App">
        <BoxColor style={}/>
        <Random min={1} max={10}/>
        <Greetings lang="es"/>
        {data.map((person)=><IdCard person={person}/>)}
    </div>
  );
}

export default App;
