import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [number, setNumber] = useState(0);
  const [memory, setMemory] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);
  const [previousOperation, setPreviousOperation] = useState("");

  const getNumber = (inputNumber) => {
    if (!number) {
      setNumber(inputNumber);
    } else {
      setNumber(Number(`${number}${inputNumber}`));
    }
  };

  const add = () => {
    if (operation !== null) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result + number);
      } else if (operation === "*") {
        setResult(result + number);
      } else if (operation === "/") {
        setResult(result + number);
      }
    } else {
      setResult(number);
    }
    setNumber(0);
    setOperation("+");
  };

  const substract = () => {
    if (operation !== null) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result + number);
      } else if (operation === "*") {
        setResult(result + number);
      } else if (operation === "/") {
        setResult(result + number);
      }
    } else {
      setResult(number);
    }
    setNumber(0);
    setOperation("-");
  };

  const multiply = () => {
    if (operation !== null) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result + number);
      } else if (operation === "*") {
        setResult(result + number);
      } else if (operation === "/") {
        setResult(result + number);
      }
    } else {
      setResult(number);
    }
    setNumber(0);
    setOperation("*");
  };

  const divide = () => {
    if (operation !== null) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result + number);
      } else if (operation === "*") {
        setResult(result + number);
      } else if (operation === "/") {
        setResult(result + number);
      }
    } else {
      setResult(number);
    }
    setNumber(0);
    setOperation("/");
  };

  const handleOperation = (operationType) => {
    if (operation !== operationType) {
      switch (operationType) {
        case "+":
          add();
          break;
        case "-":
          substract();
          break;
        case "/":
          divide();
          break;
        case "*":
          multiply();
          break;
        default:
          return;
      }
    } else {
      switch (operationType) {
        case "+":
          add();
          break;
        case "-":
          substract();
          break;
        case "/":
          divide();
          break;
        case "*":
          multiply();
          break;
        default:
          return;
      }
    }
  };

  const arithmeticOperation = (type) => {
    setOperation(type);
  };

  const getResult = () => {
    handleOperation(operation);
  };

  const reset = () => {
    setResult(0);
    setNumber(0);
    setMemory(0);
    setOperation("");
  };

  const deleteNumber = () => {
    setNumber(number.toString().slice(0, -1));
  };

  const setDecimal = () => {
    if (!number.toString().includes(".")) {
      setNumber(number.toString() + ".");
    }
  };

  const thousandsSeparators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  return (
    <>
      <div className="container">
        <span>
          Result: {result} Number: {number} Memory: {memory} Operation:
          {operation}
        </span>
        <br />
        <br />
        <span>
          {number ? thousandsSeparators(number) : thousandsSeparators(result)}
        </span>
        <div className="inputs-container">
          <button onClick={() => getNumber(7)}>7</button>
          <button onClick={() => getNumber(8)}>8</button>
          <button onClick={() => getNumber(9)}>9</button>
          <button onClick={deleteNumber}>DEL</button>
          <button onClick={() => getNumber(4)}>4</button>
          <button onClick={() => getNumber(5)}>5</button>
          <button onClick={() => getNumber(6)}>6</button>
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => getNumber(1)}>1</button>
          <button onClick={() => getNumber(2)}>2</button>
          <button onClick={() => getNumber(3)}>3</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={setDecimal}>.</button>
          <button onClick={() => getNumber(0)}>0</button>
          <button onClick={() => handleOperation("/")}>/</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button className="grown-inputs" onClick={reset}>
            RESET
          </button>
          <button className="grown-inputs" onClick={getResult}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
