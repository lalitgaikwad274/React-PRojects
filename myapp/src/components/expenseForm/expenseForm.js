import React from "react";
import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
   const [inputData, setData] = useState({
      task_name: "",
      task_amount: "",
      task_date: "",
   });

   const setName = (event) => {
      setData({
         ...inputData,
         task_name: event.target.value,
      });
   };

   const setAmount = (event) => {
      setData({ ...inputData, task_amount: event.target.value });
   };

   const setDate = (event) => {
      setData({ ...inputData, task_date: event.target.value });
   };

   const onSubmitevent = (event) => {
      event.preventDefault();

      console.log("On Submit");

      const expenseData = {
         id: Math.round(Math.random() * 1000),
         name: inputData.task_name,
         amount: inputData.task_amount,
         date: inputData.task_date,
      };

      console.log("ON expenseForm", expenseData);
      props.onSaveData(expenseData);

      setData({
         task_name: "",
         task_amount: "",
         task_date: "",
      });
   };

   return (
      <>
         <form className="form-data" onSubmit={onSubmitevent}>
            <div className="input-data">
               <input
                  type="text"
                  value={inputData.task_name}
                  placeholder="enter the task"
                  className="form-control"
                  onChange={setName}
                  required
               />
               <input
                  type="text"
                  value={inputData.task_amount}
                  placeholder="enter the amount"
                  className="form-control"
                  onChange={setAmount}
                  required
               />
            </div>
            <input
               type="date"
               value={inputData.task_date}
               className="form-date"
               onChange={setDate}
            />
            <button className="btn"> ADD</button>
         </form>
      </>
   );
};

export default ExpenseForm;
