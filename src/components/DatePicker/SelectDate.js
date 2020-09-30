import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import "../../assets/styles/components/DatePicker/SelectDate.scss";

const SelectDate = ({ className, setState, state }) => {
 const [startDate, setStartDate] = useState(new Date().toString());
 const handleChange = (date) => {
  setStartDate(date.toString());
 };
 return (
  <div className={`flatDate ${className}`}>
   <Flatpickr onChange={handleChange} defaultValue={startDate} />
  </div>
 );
};

export default SelectDate;
