import React from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import {
 MdSentimentVeryDissatisfied,
 MdSentimentVerySatisfied,
} from "react-icons/md";

// Stlyes
import "../../assets/styles/components/ProblemQualification/ProblemQualification.scss";

// Compnents
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import ProblemQualificationStars from "../ProblemQualificationStars/ProblemQualificationStars";
import GraphicData from "../GraphicData/GraphicData";
import Button from "../Buttons/Button";

const ProblemQualification = ({ problemWorker = "@Alan", userPhoto }) => {
 // Handle stars range
 const [rangeStars, setRangeStars] = useInputForm(0.0);
 console.log(rangeStars);

 // Handle submit of form
 const onSubmit = (ev) => ev.preventDefault();

 return (
  <form onSubmit={onSubmit} className="problem-qualification">
   <div className="problem-qualification__input">
    <strong>Qualification</strong>
    <p>
     Tell us, how you qualificate the work of <span>{problemWorker} </span>
    </p>

    <div className="problem-qualification__stars">
     <div className="problem-qualification__stars--label">
      <GraphicData value="Unsatisfied">
       <MdSentimentVeryDissatisfied size="24" />
      </GraphicData>
      <GraphicData value="Very Satisfied">
       <MdSentimentVerySatisfied size="24" />
      </GraphicData>
     </div>
     <input
      type="range"
      min={0.0}
      max={5.0}
      value={rangeStars}
      step="0.1"
      onChange={setRangeStars}
     />
     <ProblemQualificationStars qualification={rangeStars} />
    </div>
   </div>

   <div className="problem-qualification__input">
    <strong>Opinions (Optional)</strong>
    <p>
     Do you want to tell something about <span>{problemWorker}</span>
    </p>
    <div className="problem-qualification__input--user-opinion">
     <ProfilePicture active source={userPhoto || PhotoUser} />
     <input type="text" placeholder="What are you thinking?" />
    </div>
   </div>
   <div className="problem-qualification__action">
    <Button type="submit" active>
     Qualificate!
    </Button>
   </div>
  </form>
 );
};

export default ProblemQualification;
