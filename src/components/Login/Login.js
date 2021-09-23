import React, { useRef, useState } from "react";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/admin/dashboard");
    } catch {
      setError("Failed to Login");
    }
  }

  return (
    <React.Fragment>
      <div className="login">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card ">
              <div className="cardBody">
                <div className="card-body">
                  <h1 className="text-center mb-3">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </h1>
                  {error ? <Alert variant="danger">{error}</Alert> : null}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        ref={emailRef}
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        ref={passwordRef}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
