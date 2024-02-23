import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="container">
      <p>
        Counter <span>{count}</span>
      </p>
      <div className="buttons">
        <button className="btn" id="decrease" onClick={handleDecrease}>
          decrease
        </button>
        <button className="btn" id="reset" onClick={handleReset}>
          reset
        </button>
        <button className="btn" id="increase" onClick={handleIncrease}>
          increase
        </button>
      </div>
    </div>
  );
};

export default App;
