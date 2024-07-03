// src/pages/AdminPanel.js
import React, { useEffect, useState } from "react";
import userService from "../services/UserService";
import UserForm from "../components/UserForm";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await userService.getAllUsers();
      setUsers(users);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleCreateUser = async (formData) => {
    try {
      await userService.createUser(formData);
      fetchUsers();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async (formData) => {
    try {
      await userService.updateUser(editingUser._id, formData);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await userService.deleteUser(id);
      fetchUsers();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Admin Panel</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <UserForm
        onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
        initialData={editingUser}
        buttonText={editingUser ? "Update User" : "Create User"}
      />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
