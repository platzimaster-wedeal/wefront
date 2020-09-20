import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => {
    setStartDate(date);
    props.setState({
      ...props.state,
      birth: date.toDateString(),
    });
  };
  return (
    <DatePicker
      className={props.className}
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
