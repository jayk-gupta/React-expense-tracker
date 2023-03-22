import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 3, 21);
  // const expenseTitle = 'Laptop';
  // const expenseAmount = 79000;
  return (
    <Card className="expense-item">
       <ExpenseDate date= {props.date}/>
      <div  className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
