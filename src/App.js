import "./styles.css";
import Dice from "./Dice";
import { useState } from "react";
export default function App() {
  window.onkeypress = function (e) {
    if (e.key === " ") {
      setnum1(Math.ceil(Math.random() * 6));
      setnum2(Math.ceil(Math.random() * 6));
    }
  };
  let [num1, setnum1] = useState(1);
  let [num2, setnum2] = useState(2);

  function first(z) {
    setnum1(z);
  }
  function second(q) {
    setnum2(q);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Dice num={num1} roll={first} />
      <Dice num={num2} roll={second} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
