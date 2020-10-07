import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/HeaderSearchFilters/HeaderSearchFilters.scss";

// Components
import SelectCategories from "../SelectCategories/SelectCategories";
import Button from "../Buttons/Button";

const HeaderSearchFilters = () => {
 const { categories } = useSelector((state) => state.CategoriesReducer);

 const [location, setLocation] = useInputForm("");
 const [minimumPrice, setMinimumPrice] = useInputForm(0);
 const [maximumPrice, setMaximumPrice] = useInputForm(0);
 const [filterCategories, setFilterCategories] = useState([]);

 const handleSubmit = (ev) => {
  ev.preventDefault();
 };

 return (
  <div className="header-search-filters">
   <strong className="header-search-filters__title">Filters</strong>

   <div className="header-search-filters__inputs">
    <strong>Location</strong>
    <label htmlFor="location">
     Current Country:
     <select
      id="location"
      onChange={setLocation}
      className="header-search-filters__select">
      <option value="USA">USA</option>
      <option value="COL">COL</option>
     </select>
    </label>
   </div>

   <div className="header-search-filters__inputs">
    <strong>Category</strong>
    <SelectCategories
     categories={categories}
     userCategories={filterCategories}
     setCategories={setFilterCategories}
     title="Select a category:"
    />
   </div>

   <div className="header-search-filters__inputs">
    <strong>Price</strong>
    <div className="header-search-filters__inputs--range">
     <label htmlFor="minimunPrice">
      Select a minimun price:{" "}
      <strong className="header-search-filters__prices">{minimumPrice}</strong>{" "}
     </label>
     <input
      type="range"
      id="minimunPrice"
      onChange={setMinimumPrice}
      min="0"
      max="1000"
      value={minimumPrice}
     />
    </div>
    <div className="header-search-filters__inputs--range">
     <label htmlFor="maximunPrice">
      Select a maximun price:{" "}
      <strong className="header-search-filters__prices">{maximumPrice}</strong>{" "}
     </label>
     <input
      type="range"
      id="maximunPrice"
      onChange={setMaximumPrice}
      min="0"
      max="1000"
      value={maximumPrice}
     />
    </div>
   </div>

   <Button
    onClick={handleSubmit}
    active
    className="header-search-filters__action">
    Apply
   </Button>
  </div>
 );
};

export default HeaderSearchFilters;
