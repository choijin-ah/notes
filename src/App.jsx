/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let post='강남우동맛집';
  //state 문법
  let [글제목,제목변경] =useState(['도현바보','바보2','강도현바보3']);
  let [로고,로고설정] =useState('도현');
  //a는 자료 이름, b는 변경을 도와주는 함수
  //변수 변경을 자동으로 (재렌더링)
  //사이트 로고/제목같은 건 하드코딩해도돼
  let[따봉, 따봉변경]=useState(0);

  let num = [1,2];
  let a = num[0];

  return (
    <div className="App">
      <div className="black-nav">
        <div>{로고}</div>
      </div>
      <button onClick={()=>{
        let ganada=[...글제목];
        ganada.sort();
        제목변경(ganada);
      }}>가나다순으로 정렬</button>
      <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉}</h4>
        <span onClick={()=>{
          // ...란? array state변경
          // array나 object일 때 수정 시 복사 후 저장
          let copy=[...글제목];
          //변경할 시 카피해서 사용하는 것이 현명한 방법
          copy[0]='여자코트추천';
          제목변경(copy);
        }}>🙆‍♀️</span>
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
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  //3강 분량 모달창
  //컴포넌트를 만드는 방법
  //리턴 안에는 하나의 태그로 감싸야 함
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App
