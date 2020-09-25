import React from "react";
import { MdPerson } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import SmallButtonSA from "../Buttons/SmallButtonSA";

import "../../assets/styles/components/GeneralInformation/GeneralInformation.scss";

const GeneralInformation = ({ name, followers, location, auth = false }) => {
 const handleEditInfo = () => alert("Voy a editar");

 return (
  <div className="GeneralInformation__container">
   <h3 className="GeneralInformation__title">General Information</h3>
   <hr />
   <div className="GeneralInformation__item">
    <figure>
     {auth ? (
      <SmallButtonSA
       icon={MdModeEdit}
       width="20px"
       height="20px"
       fontSize="15px"
       onClick={handleEditInfo}
      />
     ) : null}

     <MdPerson className="item--icon" />
    </figure>
    <p className="item--text">{name}</p>
   </div>
   <div className="GeneralInformation__item">
    <figure>
     <MdGroup className="item--icon" />
    </figure>

    <p className="item--text">{followers} Followers</p>
   </div>
   <div className="GeneralInformation__item">
    <figure>
     {auth ? (
      <SmallButtonSA
       icon={MdModeEdit}
       width="20px"
       height="20px"
       fontSize="15px"
      />
     ) : null}
     <MdHome className="item--icon" />
    </figure>
    <p className="item--text">{location}</p>
   </div>
  </div>
 );
};

export default GeneralInformation;
