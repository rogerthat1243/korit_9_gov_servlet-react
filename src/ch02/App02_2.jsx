import { useState } from "react";

function 구조분해() {
    const nums = [ 1, 2, 3, 4, 5 ];
    // const num1 = nums[0];
    // const num2 = nums[1];
    // const num3 = nums[2];
    // const num4 = nums[3];
    // const num5 = nums[4];
    const [ num1, num2, num3, num4, num5 ] = nums;

    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);
    console.log(`숫자1: ${num1}`);

    const user = {
        username: "aaa",
        password: "1234",
        name: "김준일",
        email: "email",
        phone: "010-1111-2222",
        address: "동래구",
        roles: [
            {
                roleId: 1,
                roleName: "ROLE_USER",
            },  
            {
                roleId: 2,
                roleName: "ROLE_ADMIN",
            },  
        ]
    }

    // const username = user.username;
    // const password = user.password;
    // const name = user.name;

    const { 
        name, 
        username, 
        roles:[
            {roleId:roleId1, roleName:roleName1}, 
            {roleId:roleId2, roleName:roleName2}
        ] } = user;
    // const { roleId, roleName } = role; 

    console.log(`사용자이름: ${username}`);
    console.log(`사용자이름: ${username}`);
    console.log(`권한명1: ${roleName1}`);
    console.log(`권한명2: ${roleName2}`);
}


function App02_2() {
    구조분해();

    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    const [ displayName, setDisplayName ] = useState("");
    const [ displayAge, setDisplayAge ] = useState("");

    const [ a, b, c ] = [ 1, 2, 3 ];
    const { a:aa, b:bb, c:cc } = { a:1, b:2, c:3 };

    const [ address, setAddress ] = [ "동래구", (value) => {console.log(value)} ];
    setAddress("중앙대로");

    const { address2, setAddress2 } = {
        address2: "동래구",
        setAddress2: (value) => {console.log(value)},
    }
    setAddress2("중앙대로2");

    return <div>
        <InputBox name={name} setName={setName} age={age} setAge={setAge} />
        <ButtonBox setDisplayName={setDisplayName} setDisplayAge={setDisplayAge} name={name} age={age} />
        <DisplayBox displayName={displayName} displayAge={displayAge} />
    </div>
}

export default App02_2;


function InputBox({name, setName, age, setAge}) {

    const handleNameInputOnChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleAgeInputOnChange = (e) => {
        console.log(e.target.value);
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

function DisplayBox(props) {

    return <div className="display-box">
        <ul>
            <li>{props.displayName}</li>
            <li>{props.displayAge}</li>
        </ul>
    </div>
}