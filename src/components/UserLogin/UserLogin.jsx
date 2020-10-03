import React from "react";
import { useHistory } from "react-router-dom";

// Styles
import "../../assets/styles/components/UserLogin/UserLogin.scss";

// Components
import Button from "../Buttons/Button";

const UserLogin = () => {
 // Handle go to register
 const history = useHistory();
 const goToRegister = () => history.push("/register");

 const handleOnSubmit = (ev) => ev.preventDefault();

 return (
  <form onSubmit={handleOnSubmit} className="user-login">
   <div className="user-login__title">
    <h3>Login</h3>
   </div>

   <div className="user-login__inputs">
    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Write your username" id="username" />
   </div>
   <div className="user-login__inputs">
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Write your password" id="password" />
    <small>Forgot the password?</small>
   </div>

   <div className="user-login__actions">
    <Button active> Login </Button>
    <small>Terms of service</small>
    <small onClick={goToRegister}>Don't have an account?</small>
   </div>
  </form>
 );
};

export default UserLogin;
