import React from "react";
import "./fieldToForm.css";
const FieldToForm = (props) => {
  const { name, type, errorMessage } = props;
  return (
    <div className="d-flex flex-column mb-2">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} />
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FieldToForm;
