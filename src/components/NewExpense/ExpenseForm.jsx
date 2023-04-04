import { useState } from "react";
import "./ExpenseForm.css";
import { motion } from "framer-motion";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
 }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
 }
// submit function
  const submitHandler = (event) => {
    event.preventDefault();
 
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* title */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* amount */}
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* date */}
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2020-01-01"
            max="2023-12-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Exepense</button>
      </div>
    </motion.form>
  );
};

export default ExpenseForm;
