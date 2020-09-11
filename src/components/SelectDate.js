import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={props.className}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default SelectDate;
