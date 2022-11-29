import React from 'react'
import './expenseDate.css'

function ExpenseDate(props) {

    const day = props.date.getDate();
    const month = props.date.toLocaleString('default', { month: 'long' });
    const year = props.date.getFullYear();

    //inside the return write JSX
  return (
        <div className='expense-date'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div> 
  )
}

export default ExpenseDate