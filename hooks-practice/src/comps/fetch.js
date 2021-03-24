import React, { useState, useEffect } from "react";

export default function Fetch() {
  useFetchText("http://numbersapi.com/42");
  useFetchJson("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
      <h2>A simple API Fetch component</h2>
    </>
  );
}

const useFetchJson = (url) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data, "JSON DATA"));
  }, [url]);
};

const useFetchText = (url) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => console.log(data, "TEXT DATA"));
  }, [url]);
};
