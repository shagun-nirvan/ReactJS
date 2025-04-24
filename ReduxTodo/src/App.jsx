import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux' 
import {store} from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Learn About Redux toolkit</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
