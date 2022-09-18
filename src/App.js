

import { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home';
function App() {
  const [a,b]=useState([]);
 
  // fetch the data from api
  useEffect(()=>{
   fetch('https://gorest.co.in/public/v2/users').then( (data)=>data.json()).then((data2)=>{
    b(data2);
  });
  
},[]);
 
 return(
  <div>
    {/* send the data to home component using props */}
    <Home v={a}/>
  </div>
  );
}

export default App;
