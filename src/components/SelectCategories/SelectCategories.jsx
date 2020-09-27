import React, { useState } from "react";

// Hooks
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/SelectCategories/SelectCategories.scss";

// Components
import Labels from "../Labels/Labels";

const SelectCategories = ({
 categories = ["art", "science", "magician"],
 userCategories = [],
}) => {
 // States
 const [currentCategories, setCurrentCategories] = useState(userCategories);
 const [categoryOptions, setCategoryOptions] = useState(categories);
 const [filterCategory, setFilterCategory] = useState(categories);

 // Handle the selection of categories for the user
 const handleSelectCategory = (category) => {
  if (currentCategories.includes(category)) return null;

  setCurrentCategories((prevs) => [...prevs, category]);
 };

 // Handle the filter of the categories, for use find the skill or category that need
 const handleFilterCategory = (ev) => {
  ev.preventDefault();
  let filterCategories = categoryOptions.filter((category) =>
   category.includes(ev.currentTarget.value)
  );
  setFilterCategory(filterCategories);
 };

 // Handle the event of delete some selected category of user
 const handleDeleteCategory = (category) => {
  const newCurrentCategories = currentCategories.filter(
   (currCategory) => currCategory != category
  );
  setCurrentCategories(newCurrentCategories);
 };

 return (
  <div className="select-categories">
   <label htmlFor="categories" className="select-categories__title">
    Categories
   </label>
   <input
    type="text"
    placeholder="Search and select the skills that you want"
    id="categories"
    onChange={handleFilterCategory}
   />

   <ul className="select-categories__select-list">
    {filterCategory &&
     filterCategory.map((category) => (
      <li key={category} onClick={() => handleSelectCategory(category)}>
       {currentCategories.includes(category) ? (
        <Labels name={category} active />
       ) : (
        <Labels name={category} />
       )}
      </li>
     ))}
   </ul>

   <small className="select-categories__title">Selected Categories</small>
   <ul className="select-categories__list">
    {currentCategories && currentCategories.length > 0 ? (
     currentCategories.map((category) => (
      <li
       key={category}
       className="select-categories__list--close"
       onClick={() => handleDeleteCategory(category)}>
       {" "}
       <Labels name={category} active />{" "}
      </li>
     ))
    ) : (
     <li>There is no categories selected.</li>
    )}
   </ul>
  </div>
 );
};

export default SelectCategories;
