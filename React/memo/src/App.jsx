import React, { useState, memo } from "react";

const Child = memo(({ value }) => {
  console.log("Child rendered");
  return <h2>Value: {value}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child value="Hello" />
    </div>
  );
}
