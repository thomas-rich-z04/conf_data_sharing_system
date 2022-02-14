import React, { useState } from "react";
import { signup } from "../../action/authAcation";

const AddUser = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: 2,
    error: "",
    loading: false,
    message: "",
  });

  const { name, email, password, role, error, loading, message } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, role, error, loading, message });

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password, role };

    try {
      signup(user).then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
            console.log("server error");
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              role: 2,
              error: "",
              loading: false,
              message: data.message,
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLaoding = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={name}
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              placeholder="Type user's name"
            />
            <br />

            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Type user's email"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Type user's password"
            />
            <br />

            <select
              onChange={handleChange("role")}>
              <option value={2}>Sender</option>
              <option value={3}>Receiver</option>
            </select>

            <br />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Add user
          </button>
        </form>
      </>
    );
  };

  return (
    <div className="container">
      {showLaoding()}
      {showError()}
      {showMessage()}
      {signupForm()}
    </div>
  );
};

export default AddUser;
