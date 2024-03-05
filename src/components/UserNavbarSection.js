import React from "react";
import "./UserNavbarSection.css";
const UserNavbarSection = ({ setContent }) => {
  const handleButtonClick = (componentName) => {
    setContent(componentName);
  };
  return (
    <div className="navbar-section ms-1 ps-1">
      <button onClick={() => handleButtonClick("login")}>Login</button>
      <button onClick={() => handleButtonClick("registration")}>
        Registration
      </button>
    </div>
  );
};

export default UserNavbarSection;
