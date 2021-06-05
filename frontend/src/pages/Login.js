import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <MDBContainer>
        <div className='my__container'>
          <h2>Login</h2>
          <form>
            <input
              type='text'
              className='form-control'
              value={email}
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type='password'
              className='form-control'
              value={password}
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit' className='btn btn-outline-success btn-block'>
              Login
            </button>
          </form>
        </div>
      </MDBContainer>
    </>
  );
};

export default Login;
