import React from "react";
import Button from "../buttons/Button";

const ProfileHeaderActions = ({
 isVisitor = true,
 isFollowed = false,
 onFollow,
 onRecommend,
 onEdit,
}) => {
 return (
  <>
   {isVisitor != false ? (
    <div className="profile-header__actions">
     <Button onClick={onFollow} active>
      {" "}
      {isFollowed ? "Followed" : "Follow"}{" "}
     </Button>
     <Button onClick={onRecommend}> Recommend </Button>
    </div>
   ) : (
    <div className="profile-header__actions">
     <Button active onClick={onEdit}>
      {" "}
      Edit{" "}
     </Button>{" "}
    </div>
   )}
  </>
 );
};

export default ProfileHeaderActions;
