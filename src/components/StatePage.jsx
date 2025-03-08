import React from "react";

const StatePage = () => {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>State Page</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default StatePage;
