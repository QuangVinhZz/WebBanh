import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  // Hàm xử lý tăng
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Hàm xử lý giảm
  const handleDecrease = () => {
    setCount(count - 1);
  };

  // Hàm xử lý reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button className="btn increase" onClick={handleIncrease}>
          INCREASE
        </button>
        <button className="btn decrease" onClick={handleDecrease}>
          DECREASE
        </button>
        <button className="btn reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
