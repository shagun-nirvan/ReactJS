import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)  //useState updates the function

  const addValue = () =>{
    console.log('clicked', counter);
    
    // counter = counter+1  //ui updation ko react control karta hai
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)  //multiple functions lagaane k baad bhi counter sirf 1 hi increase karega
                            //this is due to useState() because this function pass the elements in batches
  }
  const removeValue = () =>{
    console.log('clicked', counter);
    if (counter>0) {
      setCounter(counter-1)
    }
    // counter = counter+1  //ui updation ko react control karta hai
    

  }

  return (
   <>
   <h1>Shagun Nirvan</h1>
   <h2>Counter value: {counter}</h2>

   <button onClick={addValue}>Add Value</button>
   <br />
   <button onClick={removeValue}>Remove Value</button>
   </>
  )
}

export default App
