import React from "react";

// Hooks
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/PostProblemPayment/PostProblemPayment.scss";

// Components
import Button from "../Buttons/Button";

const PostProblemPayment = ({ agreed = false, agreedPrice = 0, salaryMin = 0, salaryMax = 1000 }) => {
 const [price, setPrice] = useInputForm(0);

 return (
  <div className="post-problem-payment">
   <label className="post-problem-payment__title" htmlFor="problem-price">
    Payment
   </label>

   <p className="post-problem-payment__action-price">
    {agreed != true ? "Select your price:" : "Agreed Price:"}{" "}
    <span className="post-problem-payment__current-price">
     ${Number(agreedPrice) > 0 ? Number(agreedPrice) : price}
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

     <input type="range" onChange={setPrice} max={salaryMax} min={salaryMin} />
    </>
   )}
  </div>
 );
};

export default PostProblemPayment;
