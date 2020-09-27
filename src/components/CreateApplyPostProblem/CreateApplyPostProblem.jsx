import React, { Fragment } from "react";
import "../../assets/styles/components/CreateApplyPostProblem/CreateApplyPostProblem.scss";

const CreateApplyPostProblem = ({ price, currency, schedule }) => {
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
   <p className="PostProblem__optional--tile">Comment (Optional):</p>
   <textarea
    className="PostProblem__input"
    type="text"
    placeholder="Some questions or recommendation?"
   />
   <div className="PostProblem__buttons">
    <button type="submit">Apply</button>
    <button type="button">Edit</button>
   </div>
  </Fragment>
 );
};

export default CreateApplyPostProblem;
