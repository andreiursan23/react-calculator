import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  // States for calculator operations
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  // States for color themes
  const [selected, setSelected] = useState(1);
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    if (selected === 1) {
      setTheme("theme1");
    } else if (selected === 2) {
      setTheme("theme2");
    } else if (selected === 3) {
      setTheme("theme3");
    }
  }, [selected]);

  // Helper functions for calculator operations
  const getNumber = (inputNumber) => {
    if (!number) {
      setNumber(inputNumber);
    } else {
      setNumber(Number(`${number}${inputNumber}`));
    }
  };

  const calculations = () => {
    if (operation !== null && result !== 0) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result - number);
      } else if (operation === "*") {
        setResult(result * number);
      } else if (operation === "/") {
        if (number !== 0) {
          setResult(result / number);
        } else {
          setResult("Error");
        }
      }
    } else {
      setResult(number);
    }
    setNumber(0);
  };

  const handleOperation = (operationType) => {
    switch (operationType) {
      case "+":
        calculations();
        setOperation("+");
        break;
      case "-":
        calculations();
        setOperation("-");
        break;
      case "/":
        calculations();
        setOperation("/");

        break;
      case "*":
        calculations();
        setOperation("*");
        break;
      default:
        return;
    }
  };

  const getResult = () => {
    calculations();
    setOperation("");
  };

  const reset = () => {
    setOperation("");
    setResult(0);
    setNumber(0);
  };

  const deleteNumber = () => {
    if (number === 0 || number === "") {
      setNumber(0);
    } else {
      setNumber(number.toString().slice(0, -1));
    }
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

  // Color themes helpers
  const toggleValues = [1, 2, 3];

  const handleChange = (val) => {
    setSelected(val);
  };

  return (
    <>
      <div className={`container ${theme}`}>
        <div className="calculator-container">
          <div className="theme-switch ">
            <h1>calc</h1>
            <div className="theme">
              <h2>THEME</h2>
              <div className={`switch-container ${theme}`}>
                {toggleValues.map((val, index) => (
                  <span key={index}>
                    <input
                      selected={selected}
                      type="radio"
                      name="switch"
                      checked={selected === val}
                      className={`switch-radio ${theme}`}
                    />
                    <label
                      title={val}
                      onClick={() => handleChange(val)}
                      className={`switch-label ${theme}`}
                    >
                      {val}
                    </label>
                  </span>
                ))}
                <span
                  style={{
                    left: `${(toggleValues.indexOf(selected) / 3) * 100}%`,
                  }}
                  className={`switch-selection ${theme}`}
                />
              </div>
            </div>
          </div>
          <div className={`display ${theme}`}>
            <p>
              {number
                ? thousandsSeparators(number)
                : thousandsSeparators(result)}
            </p>
          </div>
          <div className={`inputs-container ${theme}`}>
            <button onClick={() => getNumber(7)} className={`${theme}`}>
              7
            </button>
            <button onClick={() => getNumber(8)} className={`${theme}`}>
              8
            </button>
            <button onClick={() => getNumber(9)} className={`${theme}`}>
              9
            </button>
            <button onClick={deleteNumber} className={`blue-inputs ${theme}`}>
              DEL
            </button>
            <button onClick={() => getNumber(4)} className={`${theme}`}>
              4
            </button>
            <button onClick={() => getNumber(5)} className={`${theme}`}>
              5
            </button>
            <button onClick={() => getNumber(6)} className={`${theme}`}>
              6
            </button>
            <button
              onClick={() => handleOperation("+")}
              className={`operations ${theme}`}
            >
              +
            </button>
            <button onClick={() => getNumber(1)} className={`${theme}`}>
              1
            </button>
            <button onClick={() => getNumber(2)} className={`${theme}`}>
              2
            </button>
            <button onClick={() => getNumber(3)} className={`${theme}`}>
              3
            </button>
            <button
              onClick={() => handleOperation("-")}
              className={`operations ${theme}`}
            >
              -
            </button>
            <button onClick={setDecimal} className={`operations ${theme}`}>
              .
            </button>
            <button onClick={() => getNumber(0)} className={`${theme}`}>
              0
            </button>
            <button
              onClick={() => handleOperation("/")}
              className={`operations ${theme}`}
            >
              ÷
            </button>
            <button
              onClick={() => handleOperation("*")}
              className={`operations ${theme}`}
            >
              ×
            </button>
            <button
              className={`grown-inputs blue-inputs ${theme}`}
              onClick={reset}
            >
              RESET
            </button>
            <button
              className={`grown-inputs red-inputs ${theme}`}
              onClick={getResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
