import React, { useState } from "react";

// Component con được ghi nhớ bằng React.memo
const ChildComponent = React.memo(({ count }) => {
  console.log("ChildComponent re-rendered");
  return <p>Count from parent: {count}</p>;
});

const ReactMemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>React.memo Example</h1>
      <ChildComponent count={count} />
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

export default ReactMemoExample;
