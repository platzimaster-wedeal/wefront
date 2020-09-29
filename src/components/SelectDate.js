import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SelectDate = ({ className, setState, state }) => {
 const [startDate, setStartDate] = useState(new Date());
 const handleChange = (date) => {
  setStartDate(date);
  setState({
   ...state,
   birth: date.toDateString(),
  });
 };
 return (
  <DatePicker
   className={className}
   selected={startDate}
   onChange={handleChange}
   peekNextMonth
   showMonthDropdown
   showYearDropdown
   dropdownMode="select"
  />
 );
};

export default SelectDate;
