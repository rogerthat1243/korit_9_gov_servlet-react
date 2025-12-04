import { useState } from "react";
import "./style.css";

function App02() {
  const [ name, setName ] = useState("기본 이름"); // input의 value값이 변하면 동작
  const [ name2, setName2 ] = useState(""); // 확인 버튼이 눌러지면 변할 상태
  const [ age, setAge ] = useState("0");
  const [ age2, setAge2 ] = useState("");

  const data  = {
    title: "리액트 기초 시작",
    nameVaule: "기본 이름",
    age: "0",
  }

  const handleNameInputOnChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const handleAgeInputOnChange = (event2) => {
    console.log(event.target.value);
    setAge(event2.target.value);
  }

  const handleOkOnClick = () => {
    setName2(name);
    setAge2(age);
  }

  const handleResetOnClick = () => {
    setName("기본 이름");
    setAge("0");
    setName2("");
    setAge2("");
  }

  return <div className="main-box">
    <div className="title-box">
      <h1>제목: {data.title}</h1>
    </div>
    <div className="input-box">
      <input type="text" value={name} onChange={handleNameInputOnChange} />
      <input type="text" value={age} onChange={handleAgeInputOnChange} />
    </div>
    <div className="button-box">
      <button onClick={handleOkOnClick}>확인</button>
      <button onClick={handleResetOnClick}>초기화</button>
    </div>
    <div className="display-box">
      <ul>
        <li>이름: {name2}</li>
        <li>나이: {age2}</li>
      </ul>
    </div>
  </div>
}

export default App02;