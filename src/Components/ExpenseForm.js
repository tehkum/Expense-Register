import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    var [enteredTitle, setEnteredTitle] = useState('');
    var [enteredAmount, setEnteredAmount] = useState('');
    var [enteredDate, setEnteredDate] = useState('');

    function titleInput(event) {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    }
    function amountInput(event) {
        setEnteredAmount(event.target.value);
    }
    function dateInput(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" onChange={titleInput} value={enteredTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "Number" min="0.0" onChange={amountInput} value={enteredAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = "Date" onChange={dateInput} value={enteredDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "submit">Add Expense</button>
                <button type = "button" onClick={props.onCancel}>cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;