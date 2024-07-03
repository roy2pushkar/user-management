// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import EditUser from "./pages/EditUser";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/admin/edit/:id" component={EditUser} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/" component={App} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
