import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";

// Hooks
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/HeaderSearchBar/HeaderSearchBar.scss";

// Components
import HeaderSearchResults from "../HeaderSearchResults/HeaderSearchResults";
import HeaderSearchFilters from "../HeaderSearchFilters/HeaderSearchFilters";

const HeaderSearchBar = ({ results }) => {
 const [isFilters, setIsFilters] = useState(true);

 const [searchValue, setSearchValue] = useInputForm("");

 const handleFiltersView = () => {
  setIsFilters(!isFilters);
 };

 const handleSubmit = (ev) => ev.preventDefault();

 return (
  <div className="header-search-bar">
   <input
    type="text"
    placeholder="Search and find the best workers"
    onChange={setSearchValue}
   />
   <section
    className={`header-search-bar__detail ${
     searchValue && searchValue.length > 0 && "header-search-bar__detail-active"
    }`}>
    <div
     className={`header-search-bar__detail--results ${
      searchValue &&
      searchValue.length > 0 &&
      "header-search-bar__detail--results-active"
     }`}>
     <HeaderSearchResults />
    </div>
    <div
     className={`header-search-bar__detail--filters ${
      isFilters &&
      searchValue &&
      searchValue.length > 0 &&
      "header-search-bar__detail--filters-active"
     }`}>
     <HeaderSearchFilters />
    </div>
    <span
     className={`header-search-bar__detail--filters-button ${
      searchValue &&
      searchValue.length > 0 &&
      "header-search-bar__detail--filters-button-active"
     }`}
     onClick={handleFiltersView}>
     <MdFilterList size="42" />
    </span>
   </section>
  </div>
 );
};

export default HeaderSearchBar;
