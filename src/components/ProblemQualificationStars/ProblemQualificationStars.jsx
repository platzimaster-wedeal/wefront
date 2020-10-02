import React from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

// Styles
import "../../assets/styles/components/ProblemQualificationStars/ProblemQualificationStars.scss";

const ProblemQualificationStars = ({ qualification = 4.6 }) => {
 const totalStars = Math.floor(qualification);
 const mediumStars = qualification - totalStars;
 console.log(mediumStars, "helo");
 console.log(totalStars, "heloInt");

 const RenderFullStars = (totalStars) => {
  let arrayStars = [];
  for (let i = 0; i < totalStars; i++) {
   arrayStars.push(i);
  }
  return arrayStars.map((star, i) => <MdStar key={i} size="24" />);
 };

 const RenderMediumStars = (mediumStars) => {};

 return (
  <div className="problem-qualification-stars">
   <div className="problem-qualification-stars__all">
    <MdStarBorder size="24" />
    <MdStarBorder size="24" />
    <MdStarBorder size="24" />
    <MdStarBorder size="24" />
    <MdStarBorder size="24" />
   </div>
   <div className="problem-qualification-stars__selected">
    {totalStars > 0 && RenderFullStars(totalStars)}
    {mediumStars >= 0.5 && mediumStars <= 0.9 && <MdStarHalf size="24" />}
   </div>
  </div>
 );
};

export default ProblemQualificationStars;
