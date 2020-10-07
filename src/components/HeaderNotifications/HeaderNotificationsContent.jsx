import React from "react";
import { Link } from "react-router-dom";

const HeaderNotificationsContent = ({ user, action, time }) => {
 return (
  <div>
   <div className="HeaderProfileMenu__name--profileImg">
    <h2 className="HeaderNotifications__title">Notifications</h2>
   </div>
   <hr />
   <div className="HeaderNotifications__content">
    <ul className="HeaderNotifications__content--ul">
     <li>
      <Link className="content__ul--link" to="#">
       @{user}
      </Link>{" "}
      {action} <span>{time}</span>
     </li>
     <li>
      <Link className="content__ul--link" to="#">
       @{user}
      </Link>{" "}
      {action} <span className="content__ul--span">{time}</span>
     </li>
     <li>
      <Link className="content__ul--link" to="#">
       @{user}
      </Link>{" "}
      {action} <span>{time}</span>
     </li>
    </ul>
   </div>
  </div>
 );
};

export default HeaderNotificationsContent;
