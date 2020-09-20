import React, { Fragment } from "react";
import {connect} from 'react-redux'


const CompanyData = ({user}) => {
  console.log(user)
  return (
    <Fragment>
      <h1>Hola desde Company Data selections</h1>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state)

  return {
    user: state.user
  };
};
export default connect(mapStateToProps, null)(CompanyData);
