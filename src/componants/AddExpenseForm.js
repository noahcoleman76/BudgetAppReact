import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        function setData() {
            let oldData = JSON.parse(localStorage.getItem('expenseArray'));
            oldData.push(expense)
            localStorage.setItem('expenseArray', JSON.stringify(oldData))
            console.log(localStorage.getItem('expenseArray'))
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            })
        }
        
        event.preventDefault();
        setName('');
        setCost('');
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseFloat(cost)
        }
        isNaN(cost) ? alert(`"${cost}" is not a valid number`) :
        cost.trim().length === 0 ? alert('Enter a valid number') :
        setData()
}

return (
    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm d-flex flex-column">
                <label for="name" className="mt-auto">Name</label>
                <input
                    required="required"
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className="col-sm">
                <label for="cost">Amount
                    <span className="fs"> (negative - expense, positive - income)</span>
                </label>
                <input
                    required="required"
                    type="text"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                ></input>
            </div>
            <div className="col-sm d-flex align-items-end">
                <button type="submit" className="btn save mt-2">Save</button>
            </div>
        </div>
    </form>
)
}

export default AddExpenseForm;