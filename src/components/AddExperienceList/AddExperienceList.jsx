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
 options = [],
 setOptions,
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

 const [newOption, setNewOption] = useState({})
 const handleAddOption = () => {

  if (newOption.title.length > 0) {
   setCurrentOptions((prev) => [...prev, newOption]);
   setOptions((prev) => [...prev, newOption])
  }
  setIsModalAddExp(false)
 };

 const handleOption = () => {
  setOption((prev) => [...prev, newOption]);
  setOptions((prev) => [...prev, newOption])
  setIsModalAddExp(false)
 };

 return (
  <div className="add-option-list">
   <label htmlFor={title}> {title} </label>
   <ul>
    {currentOptions.length > 0 ? (
     currentOptions.map((currOpt) => (
      <li key={currOpt} onClick={handleViewExp}>
       <Requirements active title={currOpt.title} />
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
      <AddExperience onAdd={handleAddOption} setOption={setNewOption} />
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
  </div>
 );
};

export default AddExperienceList;
