import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";

const ProfileHeaderActions = ({
 isVisitor = true,
 isFollowed = false,
 onFollow,
 onRecommend,
 onEdit,
}) => {
 const history = useHistory();
 const goToEdit = () => history.push("/user/configuration");

 return (
  <>
   {isVisitor != false ? (
    <div className="profile-header__actions">
     <Button onClick={onFollow} active>
      {" "}
      {isFollowed ? "Followed" : "Follow"}{" "}
     </Button>
    </div>
   ) : (
    <div className="profile-header__actions">
     <Button active onClick={goToEdit}>
      {" "}
      Edit{" "}
     </Button>{" "}
    </div>
   )}
  </>
 );
};

export default ProfileHeaderActions;
