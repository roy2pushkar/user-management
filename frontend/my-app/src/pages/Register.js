// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import UserForm from "../components/UserForm";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await authService.register(formData);
      navigate.push("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <UserForm onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
};

export default Register;
