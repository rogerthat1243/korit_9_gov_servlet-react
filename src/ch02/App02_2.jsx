import { useState } from "react";

function App02_2() {
  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState("");
  const [ displayName, setDisplayName ] = useState("");
  const [ displayAge, setDisplayAge ] = useState("");

    return <div>
        <InputBox name={name} setName={setName} age={age} setAge={setAge} />
        <ButtonBox setDisplayName={setDisplayName} setDisplayAge={setDisplayAge} name={name} age={age} />
        <DisplayBox displayName={displayName} displayAge={displayAge} />
    </div>
}

export default App02_2;


function InputBox({name, setName, age, setAge}) { // << 객체로 들어오니까 중괄호 필요

  const handleNameInputOnChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value);
  }

  const handleAgeInputOnChange = (e) => {
    console.log(e.target.value)
    setAge(e.target.value);
  }

  return <div className="input-box">
    <input type="text" value={name} onChange={handleNameInputOnChange} />
    <input type="text" value={age} onChange={handleAgeInputOnChange} />
  </div>
}

function ButtonBox({setDisplayName, setDisplayAge, name, age}) {

  const handleOnClick = () => {
    setDisplayName(name);
    setDisplayAge(age);
  }

  return <div className="button-box">
    <button onClick={handleOnClick}>확인</button>
  </div>
}

function DisplayBox({displayName, displayAge}) {

  return <div className="display-box">
    <ul>
      <li>{displayName}</li>
      <li>{displayAge}</li>
    </ul>
  </div>
}