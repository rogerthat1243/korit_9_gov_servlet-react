import { useState } from "react";

function Inputs() {
    const [ fullName, setFullName ] = useState("");
    const [ age, setAge ] = useState("");

    

    const onChange = (e) => {
        setFullName(e.target.value)

    }

    const onAgeChange = (e) => {
        setAge(e.target.value)
    }

    return <>
        <input type="text" onChange={onChange} placeholder="이름" />
        <input type="text" placeholder="나이" onChange={onAgeChange}/>
        <h2>이름: {fullName}</h2>
        <h2>나이: {age}</h2>
    </>
}

export default Inputs;