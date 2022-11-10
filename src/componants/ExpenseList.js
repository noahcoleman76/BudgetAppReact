import React, { useContext  } from "react";
import ExpenseItem from './ExpenseItem'
import { AppContext } from "../context/AppContext";
import '../style.css'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    let noHistory;
    if (expenses.length !== 0){
        noHistory = 'hidden';
    }
    else {
        noHistory = 'notHidden';
    }
    return (
        <ul className="list-group overflow ">
            <p className={noHistory}>No History</p>
            {expenses.map(((expense) => (
                <ExpenseItem 
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            )))}
        </ul>
    )
}

export default ExpenseList;