import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToDoApp from './components/toDo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <ToDoApp />
    </>
  )
}

export default App