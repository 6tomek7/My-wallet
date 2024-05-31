import React, { useState } from "react";
import "./registration.css";
const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (username.length < 5) {
      errors.username = "Nazwa użytkownika musi mieć minimum 5 znaków";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password = "Hasło musi mieć minimum 8 znaków, zawierać co najmniej jedną dużą literę i jeden znak specjalny";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Hasła muszą się zgadzać";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const user = { username, email, password };

    try {
      const response = await fetch("http://test-database/user-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Hasło:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>
          Potwierdź hasło:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default Registration;
