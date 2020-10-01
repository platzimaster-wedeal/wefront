import React from "react";
import {Link} from "react-router-dom";
import "../../assets/styles/components/Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer__container">
      <h1 className="Footer__logo">W</h1>
      <p><Link to="/">Terms of service</Link></p>
      <p><Link to="/">© Copyright 2020 - WeDeal </Link></p>
    </div>
  )
}

export default Footer