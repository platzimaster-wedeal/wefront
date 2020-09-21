import React, { Fragment } from "react";
import { connect } from "react-redux";

const CompanyData = () => {
 return (
  <>
   <h1>Hola desde Company Data selections</h1>
  </>
 );
};

const mapStateToProps = (state) => {
 return {
  user: state.user,
 };
};
export default connect(mapStateToProps, null)(CompanyData);
