import ExpenseViewer from "./ExpenseViewer";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  let[filteredYear, setFilteredYear] = useState('2020');

  function selectedYearToDisplay(selectedYear) {
    setFilteredYear(selectedYear);    
  }  

  const filteringyear = props.items.filter((expense)=> {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 

  return ( <div className = "expenses" >
      <ExpenseFilter selected={filteredYear} onSelectYear={selectedYearToDisplay}/> 
      { filteringyear.length === 0 ?(<p>No content found</p>) : (filteringyear.map(expense => <ExpenseViewer 
          amount = {expense.amount}
          title = {expense.title}
          date = {expense.date}
          key = {expense.id}
          />)) 
        } 
      
          </div>
        );

      }
      export default Expenses;