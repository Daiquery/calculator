import "./styles.css";
import { useState } from "react";
import CalculatorButton from "../CalculatorButton";

const Calculator = () => {
  const [mathBtns, setMathBtns] = useState([
    "–",
    "%",
    "^",
    "C",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ]);

  const [evalArr, setEvalArr] = useState([]);
  const [currAnswer, setCurrAnswer] = useState(0);
  const [prevAnswer, setPrevAnswer] = useState();

  const handleReset = () => {
    setPrevAnswer(null);
    setCurrAnswer(0);
    setEvalArr([]);
  };

  const handleCalc = (value) => {
    let newEvalArr = [...evalArr];
    let newVal;


    if (value === "C") {
      handleReset();
      return;
    }

    if (
      (evalArr.length === 0 && isNaN(value)) ||
      (isNaN(value) && isNaN(newEvalArr[newEvalArr.length - 1]))
    ) {
      console.log("Number is needed first.");
      return;
    }

    switch (value) {
      case " ":
        return;
      case "+":
        newVal = "+";
        break;
      case "-":
        newVal = "-";
        break;
      case "×":
        newVal = "*";
        break;
      case "÷":
        newVal = "/";
        break;
      case "=":
        if (!isNaN(newEvalArr[newEvalArr.length - 1])) {
          {
            handleAnswer(newEvalArr);
          }
        }
        return;

      default:
        newVal = value;
    }
    newEvalArr = [...evalArr, newVal];
    console.log(newEvalArr);

    setEvalArr(newEvalArr);
  };

  const handleAnswer = (arr) => {
    setCurrAnswer(eval(arr.join("")));
    setEvalArr([]);
  };

  return (
    <div className="calculator">
      <div className="calculator__ans">
        <h1>{evalArr.length > 0 ? evalArr.join("") : currAnswer}</h1>
      </div>
      <div className="calculator__controls">
        {/* make calculator button components */}
        {mathBtns.map((val, i) => {
          return (
            <CalculatorButton
              key={i}
              value={val}
              pressed={() => {
                handleCalc(val);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
