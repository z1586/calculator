import { useState } from "react";
import * as math from "mathjs";
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    const input = text.join("");

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "f2a33c";

  return(
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={resetInput} color={buttonColor} />
          <Button symbol="8" handleClick={addToText} color={buttonColor} />
          <Button symbol="9" handleClick={addToText} color={buttonColor} />
          <Button symbol="/" handleClick={addToText} color={buttonColor} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} color={buttonColor} />
          <Button symbol="5" handleClick={addToText} color={buttonColor} />
          <Button symbol="6" handleClick={addToText} color={buttonColor} />
          <Button symbol="*" handleClick={addToText} color={buttonColor} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} color={buttonColor} />
          <Button symbol="2" handleClick={addToText} color={buttonColor} />
          <Button symbol="3" handleClick={addToText} color={buttonColor} />
          <Button symbol="+" handleClick={addToText} color={buttonColor} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} color={buttonColor} />
          <Button symbol="." handleClick={addToText} color={buttonColor} />
          <Button symbol="=" handleClick={calculateResult} color={buttonColor} />
          <Button symbol="-" handleClick={addToText} color={buttonColor} />
        </div>
        <Button symbol="Clear" color="e74c3c" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
