import { useState } from 'react'
function App() {
  let [counter,setcounter]=useState(0)
  const addValue=()=>{
    if(counter<20){
    setcounter(counter+1)
    console.log("clicked",counter);}
    else{
      console.log("counter cannot go beyond 20.")
    }
  }
  const removevalue=()=>{
    if(counter>0){
    setcounter(counter-1)}
    else{
      console.log("counter cannot go below 0.")
    }
  }
  return (
    <>
    <h1>hello world</h1>
    <h2>counter value : {counter}</h2>
    <button
      onClick={addValue}
      >Add Value {counter}
    </button>
    <br />
    <br />
    <button
    onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
