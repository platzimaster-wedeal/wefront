import React, { useState } from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import { MdAdd } from "react-icons/md";

// Styles
import "../../assets/styles/components/AddOptionList/AddOptionList.scss";

// Components
import SmallButtonSA from "../Buttons/SmallButtonSA";
import Requirements from "../Requirements/Requirements";
import ModalContainer from "../Modals/ModalContainer";
import Modal from "../Modals/Modal";
import AddExperience from "../AddExperience/AddExperience";
import ProfileExperienceList from "../ProfileExperienceList/ProfileExperienceList";

const AddExperienceList = ({
 title = "Add your option",
 options = ["1"],
 type = null,
 isAuth = true,
}) => {
 // Handle modal add Experience
 const [isModalAddExp, setIsModalAddExp] = useState(false);
 const handleModal = () => setIsModalAddExp(!isModalAddExp);

 // Handle modal see experience
 const [isModalSeeExp, setIsModalSeeExp] = useState(false);
 const handleViewExp = () => setIsModalSeeExp(!isModalSeeExp);

 const [currentOptions, setCurrentOptions] = useState(options);
 const [option, setOption] = useState("");

 const handleAddOption = (ev) => {
  ev.preventDefault();
  if (option.length > 0) {
   setCurrentOptions((prev) => [...prev, option]);
   setOption("");
  }
 };

 const handleOption = (ev) => {
  ev.preventDefault();
  setOption(ev.currentTarget.value);
 };

 return (
  <form onSubmit={handleOption} className="add-option-list">
   <label htmlFor={title}> {title} </label>
   <ul>
    {currentOptions.length > 0 ? (
     currentOptions.map((currOpt) => (
      <li key={currOpt} onClick={handleViewExp}>
       <Requirements active title={currOpt} />
      </li>
     ))
    ) : (
     <small> Add something to your list. </small>
    )}
   </ul>
   {isAuth && (
    <div className="add-option-list__input">
     <SmallButtonSA icon={MdAdd} onClick={handleModal} />
    </div>
   )}

   {isModalAddExp && (
    <ModalContainer>
     <Modal title="Add Experience" onClose={handleModal}>
      <AddExperience />
     </Modal>
    </ModalContainer>
   )}
   {isModalSeeExp && (
    <ModalContainer>
     <Modal title="Experience" onClose={handleViewExp}>
      <ProfileExperienceList />
     </Modal>
    </ModalContainer>
   )}
  </form>
 );
};

export default AddExperienceList;
