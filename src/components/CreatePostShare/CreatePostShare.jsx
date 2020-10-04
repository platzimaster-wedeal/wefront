import React, { useState, createRef } from "react";
import {useInputFile} from '../../hooks/useInputFile/useInputFile'
import PhotoUser from "../../assets/static/img/users/user.jpg";
import { MdInsertPhoto } from "react-icons/md";
import "../../assets/styles/components/CreatePostShare/CreatePostShare.scss";

import InputFile from "../inputFile/InputFile";
import Button from "../Buttons/Button";
import ProfilePicture from "../ProfilePictures/ProfilePicture";

const CreatePostShare = ({ name = "No Name", avatar, onCancel }) => {
 const [fileName, setFileName, file] = useInputFile();

 return (
  <form className="CreatePostShare__container">
   <div className="CreatePostShare__container__header">
    <ProfilePicture active source={avatar || PhotoUser} />
    <div className="CreatePostShare__container__header--name">
     <h3>{name}</h3>
     <span>Will share</span>
    </div>
   </div>
   <textarea
    className="CreatePostShare__input"
    type="text"
    placeholder="What are you thinking?"
    rows="9"
   />
   <strong>Add some image to your share:</strong>
   <InputFile state={fileName} setState={setFileName} />
   <div className="CreatePostShare__buttons">
    <Button active type="button">
     Share
    </Button>
    <Button type="button" onClick={onCancel}>
     Close
    </Button>
   </div>
  </form>
 );
};

export default CreatePostShare;
