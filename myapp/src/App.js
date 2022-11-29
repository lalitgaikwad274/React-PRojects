import "./App.css";
import Expense from "./components/expenseItems/expense";
import ExpenseForm from "./components/expenseForm/expenseForm";
import React, { useState } from "react";

function App(props) {
   const [expense, addExpense] = useState([
      {
         id: 1,
         date: new Date(2022, 10, 23),
         name: "Car Wash",
         amount: 200,
      },
      {
         id: 2,
         date: new Date(2022, 4, 27),
         name: "Car Insurance",
         amount: 1000,
      },
      {
         id: 3,
         date: new Date(2022, 4, 3),
         name: "Car Insurance",
         amount: 1000,
      },
      {
         id: 4,
         date: new Date(2021, 9, 4),
         name: "News Paper",
         amount: 5,
      },
      {
         id: 5,
         date: new Date(2021, 3, 4),
         name: "News Paper",
         amount: 5,
      },
      {
         id: 6,
         date: new Date(2020, 1, 4),
         name: "News Paper",
         amount: 5,
      },
   ]);

   const getFormData = (inputData) => {
      console.log("in app");
      console.log("inputData", inputData);
      let newData = {
         id: inputData.id,
         date: new Date(inputData.date),
         name: inputData.name,
         amount: Number(inputData.amount),
      };
      addExpense((expense) => [newData, ...expense]);
      console.log("data", expense);
   };

   return (
      <div>
         <ExpenseForm onSaveData={getFormData} />
         <Expense expense={expense} />
      </div>
   );
}

export default App;
