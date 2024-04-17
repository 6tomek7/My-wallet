import React from "react";
import "./registration.css";
import FieldToForm from "components/FieldToForm";
const Registration = () => {
  const formParameters = {
    userName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  };

  const formDescription = [
    {
      id: 1,
      name: "User name",
      type: "text",
      errorMessage: "User name is too short",
    },
    { id: 2, name: "Email", type: "email", errorMessage: "Wrong email adress" },
    {
      id: 3,
      name: "Password",
      type: "password",
      errorMessage: "Minimal length for password is 6 characters",
    },
    {
      id: 4,
      name: "Confirm Password",
      type: "password",
      errorMessage: "Password don't match.",
    },
  ];

  const testFunction = () => {
    const regex = "[a-z]{3,30}";
  };

  return (
    <div className="container">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} className="p-5 ">
        {formDescription.map((e) => (
          <FieldToForm
            key={e.id}
            name={e.name}
            type={e.type}
            errorMessage={e.errorMessage}
          />
        ))}
        <div className="d-flex flex-column align-items-center w-100">
          <br />
          <button className="confirm-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
