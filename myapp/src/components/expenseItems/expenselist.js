import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

const Expenselist = ({ Data, year }) => {
   const [expenseData, setdata] = useState(Data);

   return (
      <div>
         {Data.length > 0 ? (
            Data.map((ele) => (
               <div>
                  <ExpenseItem
                     key={ele.id}
                     date={ele.date}
                     name={ele.name}
                     amount={ele.amount}
                  />
               </div>
            ))
         ) : (
            <div>
               <h1>Data for {year} not preseent </h1>
            </div>
         )}
      </div>
   );
};

export default Expenselist;
