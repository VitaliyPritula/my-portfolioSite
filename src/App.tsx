import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="lg:flex text-black">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima et labore reprehenderit, dignissimos ad ut beatae corrupti magni repudiandae, aperiam odit at cum amet nam blanditiis, illo architecto. A, doloribus?</p>
        <p>Aspernatur reprehenderit officiis ut veritatis, impedit cumque aut officia a! Cumque quasi unde similique provident, ullam amet, quibusdam magni totam laudantium ad ipsum ratione facilis, eveniet accusantium non architecto? Provident.</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
