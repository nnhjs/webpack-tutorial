import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello World!!</h1>
      <h2 className={count > 10 ? "warning" : null}>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default hot(module)(App);
