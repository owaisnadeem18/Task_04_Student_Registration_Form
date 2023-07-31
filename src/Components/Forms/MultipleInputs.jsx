import React, { useState } from "react";

const MultipleInputs = () => {
  // Using State Hook
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [Records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value }); // name is a dynamic data in JS here This line is important line
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewRecord = {
      ...userRegistration,
      id: new Date().getTime().toString,
    };
    console.log(Records);

    setRecords([...Records, NewRecord]);
    console.log(Records);

    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            id="username"
            value={userRegistration.username}
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            onChange={handleInput}
            autoComplete="off"
            name="email"
            id="email"
            value={userRegistration.email}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            onChange={handleInput}
            autoComplete="off"
            name="phone"
            id="phone"
            value={userRegistration.phone}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={handleInput}
            autoComplete="new-password"
            name="password"
            id="password"
            value={userRegistration.password}
          ></input>
        </div>

        <button type="submit">Registration</button>
      </form>

      <div>
        {Records.map((curElem) => {
          return (
            <div className="showDataStyle">
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>Password is secret </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInputs;
