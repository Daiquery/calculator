import './styles.css'
import { useState } from "react";
import CalculatorButton from "../CalculatorButton";

const Calculator = () => {
  const [calcMode, setCalcMode] = useState(""); // add substract multiply divide
  const [mathBtns, setMathBtns] = useState([
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

  const handleCalc = (value) => {
    if(evalArr.length === 0 && isNaN(value)) {
      console.log("Number is needed first.")
      return;
    }
    let newVal;
    switch (value) {
      case "+":
        newVal = "+"
        break;
      case "-":
        newVal = "-"
        break;
      case "×":
        newVal = "*"
        break;
      case "÷":
        newVal = "/"
        break;
      case "=":
        console.log("equal")
       return;
        

      default:
        newVal = value;
    }
    let newEvalArr = [...evalArr, newVal];
    console.log(newEvalArr);


    setEvalArr(newEvalArr);
  };

  return (
    <div className="calculator">
      <h1 className="calculator__ans">{currAnswer}</h1>
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
