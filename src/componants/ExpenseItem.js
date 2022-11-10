import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		let oldData = JSON.parse(localStorage.getItem('expenseArray'));
		let newData = oldData.filter(item => item.id !== props.id)
		localStorage.setItem('expenseArray', JSON.stringify(newData))
		dispatch(
			{
				type: 'DELETE_EXPENSE',
				payload: props.id,
			}
		)
	}
	let color;
	let correctCost = 0;
	if (props.cost < 0){
		color = 'red'
		correctCost = `-$${(props.cost * -1).toFixed(2)}`;
	}
	else {
		color = 'blue'
		correctCost = `$${props.cost.toFixed(2)}`;
	}
    return (
		<li class={`
		list-group-item 
		d-flex 
		justify-content-between 
		align-items-center
		border border-3
		mt-2`}>
			{props.name}
			<div>
				<span class={`badge badge-primary mr-3 ${color}`}>
                    {correctCost}
                </span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} className="delete" />
			</div>
		</li>
	);
}

export default ExpenseItem;