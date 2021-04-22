import "./App.css";

import React, { useEffect } from "react";

import Counter from "./comps/counter";
import Form from "./comps/form";
import Fetch from "./comps/fetch";
import UseRefFocus from "./comps/useRefFocus";
import UseRefNoRender from "./comps/useRefNoRender";

function App() {
  // useEffect(() => {
  //   console.log("renders");
  // }, []);
  //THE LAST PART OF USE EFFECT: THE DEPENDENCY ARRAY
  //DEPENDING ON WHAT WE PUT IN THERE THE USEEFFECT WILL FIRE ON
  // can replace component did mount/unmount
  // if you dont pass anything in to the useEffect

  //can have more than 1 useEffect and they will fire in order
  return (
    <div className="App">
      <h1>Some simple components utilizing React Hooks</h1>
      <Counter />
      <Form />
      <Fetch />
      <UseRefFocus />
      <UseRefNoRender />
    </div>
  );
}

export default App;
