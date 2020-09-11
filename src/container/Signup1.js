import React, { Fragment } from "react";
import "../assets/styles/components/Signup1.scss";
import { MdPeople, MdArrowForward, MdGroupAdd } from "react-icons/md";

// compontents
import SelectDate from "../components/SelectDate";

const Signup1 = () => {
  return (
    <Fragment>
      <div className="container1">
        <div className="signup1">
          <form className="signup1__form1">
            <h1>Información de usuario</h1>
            <p>Con este podrás ser buscado entro de la apliación</p>
            <section>
              <label className="signup1__form-label">Nombres</label>
              <input className="signup1__form-input" type="text" />
              <label className="signup1__form-label">Apellidos</label>
              <input className="signup1__form-input" type="text" />
            </section>
            <section>
              <label className="signup1__form-label">Fecha de nacimiento</label>
              <SelectDate className="signup1__form-input" />
            </section>
            <section className="signup1__form-section">
              <button className="signup1__form-button">
                <i>
                  <MdPeople />
                </i>
                Quiero trabajar
                <i>
                  <MdArrowForward />
                </i>
              </button>
              <button className="signup1__form-button">
                <i>
                  <MdGroupAdd />
                </i>
                Quiero contratar{" "}
                <i>
                  <MdArrowForward />
                </i>
              </button>
            </section>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup1;
