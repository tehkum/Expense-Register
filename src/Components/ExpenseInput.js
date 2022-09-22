import React, { useState } from 'react';
import './ExpenseInput.css';
import ExpenseForm from './ExpenseForm';

function ExpenseInput(props){

    var[afterClick, setAfterClick] = useState(false);

    function saveExpenseDataHandler(newExpenseData){
        const expenseData = {
            ...newExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    function addNewExpense(){
        setAfterClick(true);
    }
    function backToButton(){
        setAfterClick(false);
    }
    return(
        <div className="new-expense">
            {!afterClick && <button onClick={addNewExpense}>Add new Expense</button>}
            {afterClick && (<ExpenseForm onCancel={backToButton} onSaveExpenseData={saveExpenseDataHandler} />)}
            
        </div>
    );
}


export default ExpenseInput;