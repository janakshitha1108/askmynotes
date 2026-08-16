import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    // Replace with your actual backend endpoint route (e.g., / or /ask)
    fetch('https://askmynotes-unjz.onrender.com/')
      .then((res) => res.json())
      .then((data) => setData(JSON.stringify(data)))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Ask My Notes</h1>
      <p>Backend Response: {data || 'Loading...'}</p>
    </div>
  )
}

export default App