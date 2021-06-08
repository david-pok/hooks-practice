import React, { useEffect, useState } from "react";

export default function Assess() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    console.log("renders");
  }, [book]);

  return (
    <section>
      <BookForm book={book} setBook={setBook} />
      <InfoTable book={book} />
    </section>
  );
}

const BookForm = (props) => {
  console.log(props, "bookform props");
  const [user, setUser] = useState({
    userFirstName: "",
    userLastName: "",
    userPhone: "",
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, "handleSubmit user");
    props.setBook([...props.book, user]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label>
      <br />
      <input
        name="userFirstName"
        type="text"
        value={user.userFirstName}
        onChange={handleChanges}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        name="userLastName"
        type="text"
        value={user.userLastName}
        onChange={handleChanges}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        name="userPhone"
        type="text"
        value={user.userPhone}
        onChange={handleChanges}
      />
      <br />
      <input type="submit" value="Add User" />
    </form>
  );
};

const InfoTable = (props) => {
  console.log(props, "info table props");

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
          </tr>
        </thead>
      </table>
      <div>
        {props.book.map((user, i) => {
          return <div key={i}>{user.userLastName}</div>;
        })}
      </div>
    </>
  );
};
