import React from "react";
import { Link } from "react-router-dom";

// styles
import "../../assets/styles/components/LandingHeader/LandingHeader.scss";

// Components
import Button from "../Buttons/Button";

const LandingHeader = ({ goToLogin, goToRegister, isRegister, isLanding }) => {
 return (
  <header className="landing-header">
   <Link to="/">
    <h1 className="landing-header__logo">W</h1>
   </Link>
   <nav className="landing-header__nav">
    <ul>
     {isLanding ? (
      <>
       <li>
        <a href="#introduction">Introduction</a>
       </li>
       <li>
        <a href="#what">What</a>
       </li>
       <li>
        <a href="#why">Why</a>
       </li>
       <li>
        <a href="#who">Who</a>
       </li>
      </>
     ) : (
      <li>
       <Link to="/">Home</Link>
      </li>
     )}
    </ul>
    <Button active onClick={isRegister ? goToLogin : goToRegister}>
     {isRegister ? "Login" : "Register"}
    </Button>
   </nav>
  </header>
 );
};

export default LandingHeader;
