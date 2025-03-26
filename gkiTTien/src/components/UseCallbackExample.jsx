import React, { useState, useCallback } from "react";

// Component con nhận hàm từ cha
const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Ghi nhớ hàm để tránh tạo lại khi component re-render
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;
