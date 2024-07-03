// src/pages/EditUser.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/UserService";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getUserById(id);
        setUser(fetchedUser);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdateUser = async (formData) => {
    try {
      await userService.updateUser(id, formData);
      navigate.push("/admin");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      {error && <p>{error}</p>}
      {user && (
        <UserForm
          onSubmit={handleUpdateUser}
          initialData={user}
          buttonText="Update User"
        />
      )}
    </div>
  );
};

export default EditUser;
