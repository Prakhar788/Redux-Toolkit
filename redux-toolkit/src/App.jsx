import { useState } from 'react'
import Counter from './components/Counter'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Redux-Toolkit</h1>
    <Counter/>
    <Login/>
    <Profile/>
  </>
  )
}

export default App
