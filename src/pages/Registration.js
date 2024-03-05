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

  const handleSubmit = () => {
    console.log("hello");
  };

  const formDescription = [
    { name: "User name", type: "text" },
    { name: "Email", type: "email" },
    { name: "Password", type: "password" },
    { name: "Confirm Password", type: "password" },
  ];

  return (
    <div className="container">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} className="p-5 ">
        {formDescription.map((e) => (
          <FieldToForm name={e.name} type={e.type} />
        ))}
        <div className="d-flex flex-column align-items-center w-100">
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
