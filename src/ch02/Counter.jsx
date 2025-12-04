import { useState } from "react";

function Counter() {
  let num = 0;
  let [number, setNumber] = useState(0); // 밑에 세 줄
  // 앞으론 이렇게 쓸 거야 ~ (구조 분해)
  // let numberState = useState(0);
  // let number = numberState[0];
  // let setNumber = numberState[1];

  console.log(number);

  const increase = () => {
    num += 1;
    console.log(num);
  }

  const decrease = () => {
    num -= 1;
    console.log(num);
  }

  const increaseNumber = () => {
    setNumber(number + 1);
  }

    const decreaseNumber = () => {
    setNumber(number - 1);
  }

  console.log("카운터 화면 랜더링");

    return <div>
      <h1>{num}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>

      <h1>{number}</h1>
      <button onClick={increaseNumber}>+1</button>
      <button onClick={decreaseNumber}>-1</button>
    </div>
}

export default Counter;

/* return이라고 하는 행위는 자신에게 있는 그 값을 반환하는 행위인데 애가 반환이 되어 지면 main에 render로 들어감
render 해라 = 완성하고 화면에 띄워라 (render는 한 번만 호출)

*/ 