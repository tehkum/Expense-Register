import './App.css';
import Expenses from './Components/Expenses';
import ExpenseInput from './Components/ExpenseInput';
import React, { useState } from "react";

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },];


function App(props) {
  var [expenses, setExpenses] = useState(dummyData);
  

  
function expenseHandler(expense) {
    setExpenses ((prevExpenses) => 
    { return [expense, ...prevExpenses];}
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseInput onAddExpense={expenseHandler}/>
        <Expenses items={expenses}/> 
      </header>
     
    </div>
  );
}

export default App;
