import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, dispatch, history]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <MDBContainer>
        <div className="my__container">
          <h2>Login</h2>
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              className="form-control"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-outline-success btn-block">
              Login
            </button>
          </form>
        </div>
      </MDBContainer>
    </>
  );
};

export default Login;
