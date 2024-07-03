// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/actions/userActions";
import { Link } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            {userInfo ? (
              <>
                <li>
                  <Link to="/admin">Admin Panel</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to User Management System</h1>
      </main>
    </div>
  );
};

export default App;
