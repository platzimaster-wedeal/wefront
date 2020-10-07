import React, {useEffect} from "react";

// Styles
import "../../assets/styles/components/PostProblemPayment/PostProblemPayment.scss";

// Components
import Button from "../Buttons/Button";

const PostProblemPayment = ({ agreed = false, agreedPrice = 0, salaryMin = 0, salaryMax = 1000, setState, state }) => {

 return (
  <div className="post-problem-payment">
   <label className="post-problem-payment__title" htmlFor="problem-price">
    Payment
   </label>

   <p className="post-problem-payment__action-price">
    {agreed != true ? "Select your price:" : "Agreed Price:"}{" "}
    <span className="post-problem-payment__current-price">
     ${Number(agreedPrice) > 0 ? Number(agreedPrice) : state}
    </span>
   </p>
   {agreed != true && (
    <>
     <div className="post-problem-payment__range-price">
      <small>
       min: <span> ${salaryMin} </span>
      </small>
      <small>
       max: <span> ${salaryMax} </span>
      </small>
     </div>

     <input type="range" onChange={setState} max={salaryMax} min={salaryMin} />
    </>
   )}
  </div>
 );
};

export default PostProblemPayment;
