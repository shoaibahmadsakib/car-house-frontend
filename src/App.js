import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setDate]= useState([])
  useEffect(()=>{
    fetch("data.json")
    .then( res=>res.json())
    .then(data => setDate(data))
  },[])
  return (
    <div className="App">
      {
       data.map(mydata => <img src={mydata.picture} alt="" /> )
      }
       <img src="" alt="" />
    
    </div>
  );
}

export default App;
