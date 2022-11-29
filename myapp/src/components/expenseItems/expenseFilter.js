import React, { useState } from "react";
import "./expenseFilter.css";

const ExpenseFilter = (props) => {
   const [filteryear, setFilterYear] = useState("ALL");

   const getFilterYear = (event) => {
      setFilterYear(event.target.value);
      props.onSelectYear(event.target.value);
   };

   return (
      <div className="expense-filter">
         <label>Filter By Year</label>
         <select value={filteryear} onChange={getFilterYear}>
            <option value="ALL">ALL</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
         </select>
      </div>
   );
};

export default ExpenseFilter;
