/*  ----- SIGNUP ------ /*
  The signup component, where the user must instruce an email and a password 
  to get into the app
/* ------------- */

import React, { Fragment, useState } from "react";
import "../assets/styles/components/Signup.scss";
import logo from "../assets/static/WD4.png";

// Utils
import hasNumber from "../utils/hasNumber";

const Signup = (props) => {
  const [form, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [errorPassword, setErrorPassword] = useState({
    matchPassword: false,
    lengthPassword: false,
    numberOnPassword: true,
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.cpassword) {
      setErrorPassword({
        ...errorPassword,
        matchPassword: true,
      });
      setValues({
        email: "",
        password: "",
        cpassword: "",
      });
      return false;
    }

    if (form.password.length <= 5) {
      setErrorPassword({
        ...errorPassword,
        numberOnPassword: true,
        lengthPassword: true,
      });
      setValues({
        email: "",
        password: "",
        cpassword: "",
      });
      return false;
    }

    if (!hasNumber(form.password)) {
      setErrorPassword({
        ...errorPassword,
        lengthPassword: false,
        numberOnPassword: false,
      });
      setValues({
        email: "",
        password: "",
        cpassword: "",
      });
      return false;
    }
    props.history.push("/register/userdata");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="signup">
          <img src={logo} alt="WeDeal logo" />
          <form onSubmit={handleSubmit} className="signup__form" action="">
            <h1>Registrarse</h1>
            <label className="signup__form-label">Correo</label>
            <input
              className="signup__form-input"
              onChange={handleInput}
              name="email"
              value={form.email}
              type="text"
              placeholder="Email"
            />
            <label className="signup__form-label">Contraseña</label>
            <input
              className="signup__form-input"
              onChange={handleInput}
              name="password"
              value={form.password}
              type="password"
              placeholder="password"
            />
            {errorPassword.lengthPassword === true ? (
              <small className="signup__form-error">
                La contraseña debe ser mayor a 6 digitos
              </small>
            ) : (
              false
            )}
            {errorPassword.numberOnPassword === false ? (
              <small className="signup__form-error">
                Debe tener al menos un número
              </small>
            ) : (
              false
            )}
            <label className="signup__form-label">Confirmar contraseña</label>
            <input
              className="signup__form-input"
              onChange={handleInput}
              name="cpassword"
              value={form.cpassword}
              type="password"
              placeholder="Confirm password"
            />
            {errorPassword.matchPassword === true ? (
              <small className="signup__form-error">
                Las contraseñas no coinciden
              </small>
            ) : (
              false
            )}
            <p>
              Al unirse a WeDeal aceptas los <a href="#">términos</a> y{" "}
              <a href="#">condiciones.</a>
            </p>
            <button type="submit" href="#" className="signup__form-button">
              Unirse a WeDeal
            </button>

            <p>
              Ya tienes cuenta? <a href="#">Incia sesión.</a>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
