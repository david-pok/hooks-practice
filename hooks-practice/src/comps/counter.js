import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <>
      <h2>A simple counter</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2((c) => c + 1);
          //these 2 above are essentially the same thing
        }}
      >
        increments both counters
      </button>
      <button onClick={() => setCount(count + 1)}>increment 1st counter</button>
      <button onClick={() => setCount2((c) => c + 1)}>
        increment 1st counter
      </button>
      <div>1st counter: {count}</div>
      <div>2nd counter: {count2}</div>
    </>
  );
}
