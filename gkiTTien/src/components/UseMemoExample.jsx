import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Tính toán giá trị lớn và chỉ thực hiện lại khi `count` thay đổi
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default UseMemoExample;
