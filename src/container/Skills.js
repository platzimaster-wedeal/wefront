import React, { Fragment } from "react";
import { connect } from "react-redux";

const Skills = ({ user }) => {
 return (
  <>
   <h1>Hola desde el selector de skills</h1>
  </>
 );
};

const mapStateToProps = (state) => {

 return {
  user: state.user,
 };
};
export default connect(mapStateToProps, null)(Skills);
