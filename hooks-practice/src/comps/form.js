import React, { useState } from "react";

export default function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ email: "", password: "" });

  return (
    <>
      <h2>A simple form</h2>
      <div>user1 email: {values.email}</div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />

      <div>user2 email: {values2.email}</div>
      <input name="email" value={values2.email} onChange={handleChange2} />
      <input
        name="password"
        type="password"
        value={values2.password}
        onChange={handleChange2}
      />
    </>
  );
}

// this is a custom hook that basically takes
// whatever value that is in whatever target
// and returns it to that target

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
