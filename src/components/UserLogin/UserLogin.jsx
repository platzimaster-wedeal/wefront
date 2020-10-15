import React from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import { useHistory } from "react-router-dom";

// Styles
import "../../assets/styles/components/UserLogin/UserLogin.scss";

// Components
import Button from "../Buttons/Button";
import Loading from "../Loading/Loading";

const UserLogin = ({ onLogin, isLoading, isError }) => {
 // Handles state of form values
 const [username, setUsername] = useInputForm("");
 const [password, setpassword] = useInputForm("");

 // Handle go to register
 const history = useHistory();
 const goToRegister = () => history.push("/register");

 const handleOnSubmit = (ev) => {
  ev.preventDefault();
  const data = {
   username,
   password,
  };
  onLogin(data);
 };

 return (
  <form onSubmit={handleOnSubmit} className="user-login">
   <div className="user-login__title">
    <h3>Login</h3>
   </div>

   <div className="user-login__inputs">
    <label htmlFor="username">Username</label>
    <input
     type="text"
     placeholder="Write your username"
     id="username"
     onChange={setUsername}
    />
   </div>
   <div className="user-login__inputs">
    <label htmlFor="password">Password</label>
    <input
     type="password"
     placeholder="Write your password"
     id="password"
     onChange={setpassword}
    />
    <small>Forgot the password?</small>
    {isError != null && <span className="user-login__error">*{isError}</span>}
   </div>

   <div className="user-login__actions">
    {isLoading ? (
     <Loading />
    ) : (
     <Button active type="submit">
      {" "}
      Login{" "}
     </Button>
    )}
    <small>Terms of service</small>
    <small onClick={goToRegister}>Don't have an account?</small>
   </div>
  </form>
 );
};

export default UserLogin;
