import React, { useEffect, createRef } from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import { useInputFile } from "../../hooks/useInputFile/useInputFile";
import PhotoUser from "../../assets/static/img/users/user.jpg";
import { MdInsertPhoto } from "react-icons/md";
import "../../assets/styles/components/CreatePostShare/CreatePostShare.scss";

import InputFile from "../inputFile/InputFile";
import Button from "../Buttons/Button";
import ProfilePicture from "../ProfilePictures/ProfilePicture";

const CreatePostShare = ({
 idUser,
 name = "No Name",
 avatar,
 onCancel,
 onCreate,
 setInformation,
}) => {
 const [fileName, setFileName, file] = useInputFile();
 const [content, setContent] = useInputForm("");

 useEffect(() => {
  setInformation({
   content,
   myFile: file,
   id_user: idUser,
  });
 }, [content, file, idUser]);

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
    onChange={setContent}
   />
   <strong>Add some image to your share:</strong>
   <InputFile state={fileName} setState={setFileName} />
   <div className="CreatePostShare__buttons">
    <Button active type="button" onClick={onCreate}>
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
