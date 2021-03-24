import logo from "./logo.svg";
import "./App.css";
import Counter from "./comps/counter";
import Form from "./comps/form";

function App() {
  return (
    <div className="App">
      <h1>Some simple components utilizing React Hooks</h1>
      <Counter />
      <Form />
    </div>
  );
}

export default App;
