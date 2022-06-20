import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>FzGram</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
          Login
        </button>
        <h5>
          <Link to="/signup">Don't have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;
