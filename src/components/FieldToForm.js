import React from "react";
import "./fieldToForm.css";
const FieldToForm = ({ name, type }) => {
  return (
    <div className="d-flex flex-column mb-2">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} />
    </div>
  );
};

export default FieldToForm;
