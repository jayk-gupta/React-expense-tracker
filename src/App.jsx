import React,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { motion } from "framer-motion";
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  // 
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // 
  return (
    <motion.div animate ={{scale:1}} initial={{scale:0}} transition = {{type:"tween",duration:0.5}}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </motion.div>
  );
}

export default App;

/*
JSX Woking:
return React.createElement('div',{attribute}, React.createElement('h2',{},"Let's get started "),,,........)
*/
