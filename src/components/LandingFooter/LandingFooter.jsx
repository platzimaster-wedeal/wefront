import React from "react";
import { Link } from "react-router-dom";
import FooterImg from "../../assets/static/img/landing/WeStayInTouch.png";

// styles
import "../../assets/styles/components/LandingFooter/LandingFooter.scss";

const LandingFooter = () => {
 return (
  <footer className="landing__footer">
   <div className="landing__footer--navegation">
    <p className="foote__navegation--title">Navigation</p>
    <ul>
     <li className="foote__navegation--item">
      <a href="#what">What we do?</a>
     </li>
     <li className="foote__navegation--item">
      <a href="#why">Why we do?</a>
     </li>
     <li className="foote__navegation--item">
      <a href="#who">Who we are?</a>
     </li>
    </ul>
   </div>
   <img className="FooterImg" src={FooterImg} alt="" />
   <div className="landing__footer--terms">
    <Link to="/">
     <h1 className="footer__terms--logo">W</h1>
    </Link>

    <p className="footer__terms">
     <Link to="#">Terms of service</Link>
    </p>
    <p className="footer__terms">© Copyright 2020 - WeDeal</p>
   </div>
  </footer>
 );
};

export default LandingFooter;
