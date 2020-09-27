import React, { useState, createRef } from "react";
import { MdInsertPhoto } from "react-icons/md";
import "../../assets/styles/components/CreatePostShare/CreatePostShare.scss";

const CreatePostShare = () => {
 const [fileName, setFileName] = useState("Add something to share:");
 const inputRef = createRef();
 const getFileName = () => {
  setFileName(inputRef.current.files[0].name);
 };
 return (
  <form className="CreatePostShare__container">
   <textarea
    className="CreatePostShare__input"
    type="text"
    placeholder="What are you thinking?"
   />
   <label className="CreatePostShare__label" htmlFor="fileName">
    {fileName} <MdInsertPhoto className="CreatePostShare__label--icon" />
    <input
     ref={inputRef}
     type="file"
     className="CreatePostShare__label--input"
     id="fileName"
     onChange={() => getFileName()}
    />
   </label>
   <div className="CreatePostShare__buttons">
    <button type="submit">Share</button>
    <button type="button">Close</button>
   </div>
  </form>
 );
};

export default CreatePostShare;
