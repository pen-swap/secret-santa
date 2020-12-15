import { useState } from 'react'
import Santa from './Santa'
import LookupForm from './LookupForm'
import './App.css'

function App() {
  const [message, setMessage] = useState(
    "Enter your Reddit username and I'll pm you your match!"
  )
  return (
    <div className='App'>
      <Santa message={message} />
      <LookupForm setMessage={setMessage} />
    </div>
  )
}

export default App
