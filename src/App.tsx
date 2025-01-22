import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CommentForm from './Components/CommentForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CommentForm />
    </>
  )
}

export default App
