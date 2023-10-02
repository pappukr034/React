import {useState} from 'react'
import './app.css'

export function App() {
 
  let [counter,setCounter]=useState(0);

  const addValue=()=>{
    counter=counter+1;
    setCounter(counter)
  
  }

  if(counter>10) counter=0;
  if(counter<0) counter=0;

  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter)
    
  }

  return (
    <>
    <h1>Counter Project Using React JS</h1>
    <h2>Count : {counter}</h2>
    <button className='up' onClick={addValue}>Increase</button>
    <button onClick={removeValue}>Decrease</button>
    <p>Here counter value : {counter}</p>
    </>
  )
}
