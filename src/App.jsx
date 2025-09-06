import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let post='강남우동맛집';
  //state 문법
  let [글제목,b] =useState(['도현바보','도현바보2','도현바보3']);
  let [로고,로고설정] =useState('도현');
  //a는 자료 이름, b는 변경을 도와주는 함수
  //변수 변경을 자동으로 (재렌더링)
  //사이트 로고/제목같은 건 하드코딩해도돼

  let num = [1,2];
  let a = num[0];

  return (
    <div className="App">
      <div className="black-nav">
        <div>{로고}</div>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App
