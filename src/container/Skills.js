import React, { Fragment } from "react";
import {connect} from 'react-redux'


const Skills = ({user}) => {
  console.log(user)
  return (
    <Fragment>
      <h1>Hola desde el selector de skills</h1>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state)

  return {
    user: state.user
  };
};
export default connect(mapStateToProps, null)(Skills);
