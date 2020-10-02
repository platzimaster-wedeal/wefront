import React from "react";

const ProfileExperienceList = ({
 title = "Software Engineer",
 description = "I'm react developer :D",
 image = null,
}) => {
 return (
  <div className="add-experience">
   <div className="add-experience__inputs">
    <strong>Title:</strong>
    <p>{title}</p>
   </div>
   <div className="add-experience__inputs">
    <strong>Description:</strong>
    <p>{description}</p>
   </div>
   <div className="add-experience__inputs">
    <strong>Image:</strong>
    <p>
     {image ? <img src={image} alt={title} /> : <span>There is no image.</span>}
    </p>
   </div>
  </div>
 );
};

export default ProfileExperienceList;
