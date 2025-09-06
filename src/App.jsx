import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let post='강남우동맛집'

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4 id={post} style={{color:'red', fontSize:'16px'}}>{post}</h4>
    </div>
  )
}

export default App
