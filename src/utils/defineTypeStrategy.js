import { MdAdd, MdModeEdit } from "react-icons/md";

export const defineTypeStrategy = (type) => {
 switch (type) {
  case "share":
   return {
    icon: MdModeEdit,
    title: "Do you want share, something?",
    placeholder: "What are you thinking?",
   }
  case "problem":
   return {
    icon: MdAdd,
    title: "Do you want create a new problem?",
    placeholder: "What is your problem?",
   }

  default:
    return {
      icon: MdModeEdit,
      title: "Do you want share, something?",
      placeholder: "What are you thinking?",
    }
 }
};
