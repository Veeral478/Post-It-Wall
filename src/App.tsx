import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Title } from './components/title'
import Post from './components/post'
import './App.css'

//import mongoose from 'mongoose'; // Use ES6 import
///import axios from 'axios'; // Use ES6 import

function App() {
  

  return (
    <>
    <Title/>
    <Post/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
