import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
        <h2>Inital Use:</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};
export default DatePick;