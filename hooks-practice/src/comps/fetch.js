import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [counter, setCounter] = useState(0);
  const [jsonCount, setJsonCount] = useState(1);

  const { info, loading } = useFetchText(
    `http://numbersapi.com/${counter}/trivia`
  );
  const { jsonData, jLoading } = useFetchJson(
    `https://jsonplaceholder.typicode.com/todos/${jsonCount}`
  );

  return (
    <>
      <h2>A simple API Fetch component</h2>

      <h3>Trivia Text API</h3>
      <div>Trivia #{counter}</div>
      <div>{!info ? "Loading..." : info}</div>
      <button onClick={() => setCounter(counter + 1)}>Next!</button>

      <h3>TODO JSON API</h3>
      <div>
        todo #{jsonCount}: {jsonData.title}
      </div>
      <div>Completed? {jsonData.completed ? "True" : "False"}</div>
      <button onClick={() => setJsonCount(jsonCount + 1)}>Next ToDo</button>
    </>
  );
}

const useFetchText = (url) => {
  const [state, setState] = useState({ info: null, loading: true });

  useEffect(() => {
    setState((state) => ({ info: state.info, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setState({ info: data, loading: false });
      });
  }, [url, setState]);

  return state;
};

const useFetchJson = (url) => {
  const [state, setState] = useState({ jsonData: null, jLoading: true });

  useEffect(() => {
    setState((state) => ({ jsonData: state.jsonData, jLoading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({ jsonData: data, jLoading: false });
      });
  }, [url]);

  return state;
};
