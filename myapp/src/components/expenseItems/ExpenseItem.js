import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './expenseDate'


function ExpenseItem(props) {

    // regular javascript code.
    // const date = new Date();
    // const expemseName = 'car insurance'
    // const price = 5000

    // const day = props.date.getDate();
    // const month = props.date.getMonth();
    // const year = props.date.getFullYear();

    //inside the return write JSX

  //const [name,setTitle] = useState(props.name)

  // const clickHandler =()=>{

  //     setTitle('Updated')
  //     console.log(name)
  //  }



  return (
    <div className='expense-item'>
        {/* <div>{props.date.toDateString()}</div> */}

        {/* <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div> */}
        <ExpenseDate date ={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.name}</h2>
            {/* <h2>{title}</h2> */}
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button className='btn' onClick={clickHandler}> Click me</button> */}
    </div>
  )
}

export default ExpenseItem