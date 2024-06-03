import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-black font-extrabold underline'>Redux Toolkit</h1>
      <br />
      <h2 className='text-black font-bold underline'>Todo-List</h2>
      <AddTodo />
      <Todos />

    </>
  )
}

export default App
