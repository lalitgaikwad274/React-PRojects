import React, { useState } from "react";
import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import ExpenseFilter from "./expenseFilter";
import Chart from "../chart/chart";

export default function Expense(props) {
   // const [Data, setdata] = useState(props.expense);
   const [year, setyear] = useState("ALL");

   console.log(props.expense);

   const chartdata = [
      {
         month: "Jan",
         value: "0",
      },
      {
         month: "Feb",
         value: "0",
      },
      {
         month: "Mar",
         value: "0",
      },
      {
         month: "Apr",
         value: "0",
      },
      {
         month: "May",
         value: "0",
      },
      {
         month: "Jun",
         value: "0",
      },
      {
         month: "Jul",
         value: "0",
      },
      {
         month: "Aug",
         value: "0",
      },
      {
         month: "Sep",
         value: "0",
      },
      {
         month: "Oct",
         value: "0",
      },
      {
         month: "Nov",
         value: "0",
      },
      {
         month: "Dec",
         value: "0",
      },
   ];
   let Data;
   if (year === "ALL") {
      Data = props.expense.map((task) => task);
   } else {
      console.log("in thsi", year);
      Data = props.expense.filter(
         (task) => task.date.getFullYear() === Number(year)
      );
   }

   console.log(Data);
   const setFilter = (year) => {
      // console.log(year);
      // if (year !== "ALL") {
      //    console.log("not all");
      // }

      setyear(year);
      // setyear("");
      // console.log("in expense data", Data);
   };
   console.log(Data);

   return (
      <div>
         <Card className="expense">
            <ExpenseFilter onSelectYear={setFilter} />
            <Chart expenseData={Data} chartdata={chartdata} />
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
         </Card>
      </div>
   );
}
