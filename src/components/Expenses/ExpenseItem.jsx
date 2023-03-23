import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
 const [title,setTitle] = useState(props.title); //return an array
// title is pointer at managed value , second element is a function

  const clickHandler = () => {
    setTitle('Updated');
    /*
    The component function in which we call the state updating function will be executed again.
    We want to call the component function again 
    */ 
  console.log(title);
}
  // const expenseDate = new Date(2023, 3, 21);
  // const expenseTitle = 'Laptop';
  // const expenseAmount = 79000;
  return (
    <Card className="expense-item">
       <ExpenseDate date= {props.date}/>
      <div  className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>{/* we just point at the function and not call it.*/}
    </Card>
  )
}

export default ExpenseItem;
