import React, { useState, useContext } from "react";
import { continueWithGoogle, createUser } from "../helpers/firebase";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./Login-Register.css";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleSubmit = () => {
    const user = { email, password };

    createUser(user.email, user.password);
    console.log(email);
    history.push("/Login");
  };

  const handleProviderRegister = () => {
    continueWithGoogle();
    history.push("/");
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className="Register_container">
      <div className="form_container">
        <form action="" className="Login_form">
          <div className="form_image"></div>
          <h1 className="form_header">REGISTER</h1>
          <input type="text" className="form_input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <input type="text" className="form_input" placeholder="Password"onChange= {e => setPassword(e.target.value)}/>
          <button className="form_button" onClick={handleSubmit}>
            REGISTER{" "}
          </button>
          <button className="form_button" value="REGISTER" onClick={handleProviderRegister}>
            Continue with{" "}
            <img
              className="google-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
