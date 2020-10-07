import React, { useState } from "react";
import { connect } from "react-redux";
import { MdPeople, MdArrowForward, MdGroupAdd } from "react-icons/md";
import { registerRequest } from "../actions";
import "../assets/styles/components/Signup1.scss";

// compontents
import SelectDate from "../components/DatePicker/SelectDate";

const Signup1 = (props) => {
 const [form, setValues] = useState({
  name: "",
  lastname: "",
  birth: "",
  isWorker: false,
  isCompany: false,
 });

 const handleChange = (event) => {
  setValues({
   ...form,
   [event.target.name]: event.target.value,
  });
 };
 const handleWorkerClick = () => {
  setValues({
   ...form,
   isWorker: true,
  });
 };
 const handleCompanyClick = () => {
  setValues({
   ...form,
   isCompany: true,
  });
 };
 const handleSubmit = (event) => {
  event.preventDefault();
  if (form.name === "" || form.lastname === "" || form.birth === "") {
   return false;
  }
  if (form.isWorker === true) {
   props.registerRequest({
    ...props.user,
    name: form.name,
    lastname: form.lastname,
    birth: form.birth,
    isWorker: form.isWorker,
    isCompany: form.isCompany,
   });
   props.history.push("/register/selectSkills");
  }
  if (form.isCompany === true) {
   props.registerRequest({
    ...props.user,
    name: form.name,
    lastname: form.lastname,
    birth: form.birth,
    isWorker: form.isWorker,
    isCompany: form.isCompany,
   });
   props.history.push("/register/copanydata");
  }
 };

 return (
  <>
   <div className="container1">
    <div className="signup1">
     <form onSubmit={handleSubmit} className="signup1__form1">
      <h1>Información de usuario</h1>
      <p>Con este podrás ser buscado entro de la apliación</p>
      <section>
       <label className="signup1__form-label">Nombres</label>
       <input
        onChange={handleChange}
        className="signup1__form-input"
        name="name"
        value={form.name}
        type="text"
       />
       <label className="signup1__form-label">Apellidos</label>
       <input
        onChange={handleChange}
        className="signup1__form-input"
        name="lastname"
        value={form.lastname}
        type="text"
       />
      </section>
      <section>
       <label className="signup1__form-label">Fecha de nacimiento</label>
       <SelectDate
        state={form}
        setState={setValues}
        className="signup1__form-input"
       />
      </section>
      <hr />
      <section className="signup1__form-section">
       <h1>Selecciona el tipo de cuenta</h1>
       <p>No te preocupes, esto se puede cambiar después.</p>
       <button onClick={handleWorkerClick} className="signup1__form-button">
        <i>
         <MdPeople />
        </i>
        Quiero trabajar
        <i>
         <MdArrowForward />
        </i>
       </button>
       <button onClick={handleCompanyClick} className="signup1__form-button">
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
  </>
 );
};
const mapStateToProps = (state) => {
 return {
  user: state.user,
 };
};

const mapDistpatchToProps = {
 registerRequest,
};

export default connect(mapStateToProps, mapDistpatchToProps)(Signup1);
