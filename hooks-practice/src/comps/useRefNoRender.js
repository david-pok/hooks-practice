import React, { useState, useRef } from "react";

export default function UseRefNoRender() {
  const inputRef = useRef();
  const [name, setName] = useState("");

  const handleClick = () => {
    const { value } = inputRef.current;
    setName(value);
    inputRef.current.value = "";
  };
  //useRef prevents input state from updating unnecessarily
  return (
    <>
      <h2>utilizes useRef on input to stop re render during tpying</h2>
      <input ref={inputRef} />
      <button onClick={handleClick}>Enter Name</button>
      <div>Name: {name}</div>
    </>
  );
}
