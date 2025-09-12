/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  let post='강남우동맛집';
  //state 문법
  let [글제목,제목변경] =useState(['도현바보','바보2','강도현바보3']);
  let [로고,로고설정] =useState('블로그');
  //a는 자료 이름, b는 변경을 도와주는 함수
  //변수 변경을 자동으로 (재렌더링)
  //사이트 로고/제목같은 건 하드코딩해도돼
  let[따봉, 따봉변경]=useState([0,0,0]);

  //map자료 개수만큼 코드 실행해줌
  //함수의 파라미터는 array 안에 있던 자료
  //return에 뭐 적으면 array로 담아줌
  let[입력값,입력값변경]=useState('');


  //모달창 state
  let [modal,setModal] = useState(false);
  let [modalTitle,setModalTitle] = useState(0);

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
      {/* <div className="list">
        <h4 onClick={()=>{setModal(
          //느낌표는 상태를 t/f 반대로 적용해줌
          !modal)}}>
          {글제목[0]}
          <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉}</h4>
          <span onClick={()=>{
            // ...란? array state변경
            // array나 object일 때 수정 시 복사 후 저장
            let copy=[...글제목];
            //변경할 시 카피해서 사용하는 것이 현명한 방법
            copy[0]='여자코트추천';
            제목변경(copy);
          }}>🙆‍♀️</span>
        <p>2월 17일 발행</p>
      </div> */}
      {
        //map()함수 : 왼쪽 array만큼 내부코드 실행 // return오른쪽에 있는 걸 array에
        글제목.map(function(a,i){
          return (<div className="list" key={i}>
                    <h4 onClick={()=>{
                      setModalTitle(i);
                      setModal(!modal);
                      }}>{글제목[i]} <span onClick={(e)=>{ 
                      let goodCopy=[...따봉];
                      goodCopy[i]= goodCopy[i] +1;
                      따봉변경(goodCopy);
                      //이벤트 버블링 삭제
                      e.stopPropagation();
                      }}>👍</span>{따봉[i]} <button onClick={()=>{
                        let titleCopy=[...글제목];
                        titleCopy.splice(i,1);
                        제목변경(titleCopy)
                      }}>글삭제</button></h4>
                     
                    <p>2월 17일 발행</p>
                  </div>)}
        )
        }
      <input type="text" onChange={(e)=>{
        //이벤트 핸들러는 많음
        입력값변경(e.target.value);
        console.log(e.target.value)}}></input>

        <button onClick={()=>{
          let titleCopy=[...글제목];
          titleCopy.unshift(입력값);
          제목변경(titleCopy)
        }}>버튼</button>

      {
        //4: 조건문
        ///조건식?참일때실행할코드:거짓일때실행할코드
        modal==true?<Modal 글제목={글제목} ModalTitle={modalTitle} 함수={()=>{
          let copy=[...글제목];
            //변경할 시 카피해서 사용하는 것이 현명한 방법
            copy[0]='여자코트추천';
            제목변경(copy);
          }}/>:null
      }
    </div>
  )
}

  function Modal(props){
    //3강 분량 모달창ㅐ
    //컴포넌트를 만드는 방법
    //리턴 안에는 하나의 태그로 감싸야 함 state 갖다쓸 때 문제가 생김
    return(
      <div className="modal">
        { console.log(props.ModalTitle)}
          <h4>{//props 는 부모>자식만 가능
          props.글제목[props.ModalTitle]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={props.함수}>글수정</button>
        </div>
    )
  }
export default App
