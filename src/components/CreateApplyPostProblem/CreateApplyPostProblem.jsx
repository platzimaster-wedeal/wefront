import React, { Fragment } from "react";
import "../../assets/styles/components/CreateApplyPostProblem/CreateApplyPostProblem.scss";

import Button from "../Buttons/Button";

const CreateApplyPostProblem = ({
 price = 999,
 currency = "USD",
 schedule = "12/08/2020",
 onCancel,
 onApply
}) => {
 return (
  <Fragment>
   <h4 className="PostProblem__title">Resume Of The Deal</h4>
   <div className="PostProblem__price__schedule">
    <p className="PostProblem__price">
     Price:{" "}
     <span>
      ${price} {currency}
     </span>
    </p>
    <p className="PostProblem__schedule">
     Schedule: <span>{schedule}</span>
    </p>
   </div>
   <p className="PostProblem__optional--tile">Comment:</p>
   <textarea
    className="PostProblem__input"
    type="text"
    placeholder="Some questions or recommendation?"
    cols="50"
   />
   <div className="PostProblem__buttons">
    <Button active onClick={onApply}>
     Apply
    </Button>
    <Button onClick={onCancel}>
     Cancel
    </Button>
   </div>
  </Fragment>
 );
};

export default CreateApplyPostProblem;
