// import { useForm } from "react-hook-form"
import { FcRegisteredTrademark } from "react-icons/fc"
import "./CalculatorPage.css";
import Button from "../components/Button"
import React, { useState } from "react";
import { evaluate } from "mathjs";

const CalculatorPage = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) =>{
    setInput((prevInput) => prevInput + value);
  }

  const handleClear = () =>{
    setInput("");
    setResult("");
  }

  const handleEqual = () =>{
    try {
      setResult(evaluate(input).toString());
    } catch (error) {
      setResult("Erro")
    }
  };


  return (
    <section className="calculator-container"/*className='bg-gray-200 text-black min-h-screen flex flex-col md:flex-row items-center justify-center p-8'*/>
 
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <Button className="clear" onClick={handleClear}>
            C
          </Button>
          <Button onClick={() => handleClick("(")}>(</Button>
          <Button onClick={() => handleClick(")")}>)</Button>
          <Button className="operator" onClick={() => handleClick("/")}>/</Button>

          <Button onClick={() => handleClick("7")}>7</Button>
          <Button onClick={() => handleClick("8")}>8</Button>
          <Button onClick={() => handleClick("9")}>9</Button>
          <Button className="operator" onClick={() => handleClick("*")}>*</Button>

          <Button onClick={() => handleClick("4")}>4</Button>
          <Button onClick={() => handleClick("5")}>5</Button>
          <Button onClick={() => handleClick("6")}>6</Button>
          <Button className="operator" onClick={() => handleClick("-")}>-</Button>

          <Button onClick={() => handleClick("1")}>1</Button>
          <Button onClick={() => handleClick("2")}>2</Button>
          <Button onClick={() => handleClick("3")}>3</Button>
          <Button className="operator" onClick={() => handleClick("+")}>+</Button>

          <Button onClick={() => handleClick("0")}>0</Button>
          <Button onClick={() => handleClick(".")}>.</Button>
          <Button className="equal" onClick={handleEqual}>=</Button>
        </div>
      </div>

    </section>
    
    
  )
}

export default CalculatorPage