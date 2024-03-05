import React from "react";
import "./registration.css";
const Registration = () => {
  const formParameters = {
    userName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  };

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div className="container">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center w-100">
          <label>
            Username:
            <input type="text" name="userName"></input>
          </label>
          <label>
            Email <input type="text" name="userName"></input>
          </label>

          <label>
            Password
            <input type="password" name="password"></input>
          </label>
          <label>
            Confirm Password
            <input type="password" name="confirmationPassword"></input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
