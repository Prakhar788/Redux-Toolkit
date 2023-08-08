import { useState } from 'react'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Redux-Toolkit</h1>
    <Counter/>
  </>
  )
}

export default App
