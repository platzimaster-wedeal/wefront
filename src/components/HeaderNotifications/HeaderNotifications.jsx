import React, { useState } from "react";
import {Link} from "react-router-dom"
import { MdNotificationsNone } from "react-icons/md";
import HeaderNotificationsContent from "./HeaderNotificationsContent"

import "../../assets/styles/components/HeaderNotifications/HeaderNotifications.scss";

const HeaderNotifications = ({user, action, time}) => {
 const [displayNotifications, setDisplayNotidications] = useState(false);

 const handleDisplayNotifications = () => {
  setDisplayNotidications(!displayNotifications);
 };

 return (
  <div className="HeaderNotifications__container">
   <div>
    <MdNotificationsNone className="HeaderNotifications__icon" onClick={handleDisplayNotifications} />
   </div>
   <div className={`HeaderNotifications__content_container ${
     displayNotifications && "HeaderNotifications__content_container--active"
    }`}>
    <HeaderNotificationsContent user={user} action={action} time={time}/>
   </div>
  </div>
 );
};

export default HeaderNotifications;
