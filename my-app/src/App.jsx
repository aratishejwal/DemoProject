import { useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './assets/image.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my-app</h1>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={image} className="logo" alt="Vite logo" />
        </a>
        {/*<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>*/}
      </div>
      <h1>Happy Holi</h1>
      <div className="card">
        <h2>Best wishes of holi....</h2>
        {/*<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>*/}
      </div>{/*
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
