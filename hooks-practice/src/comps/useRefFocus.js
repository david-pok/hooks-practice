import React, { useRef } from "react";

export default function UseRefFocus() {
  const inputRef = useRef();
  //extrapolate the useRef hook into a variable to use below
  return (
    <>
      <h2>utilizes useRef to focus on an input field</h2>
      {/* make a ref to inputRef inside the input
      and pass it into the onclick on the button below
      so that the input will be focused when we click on the button
      */}
      <input ref={inputRef} name="inputRef Test" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
        40 mins
      </button>
    </>
  );
}
