import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        default:
            return state;
    }
}
if (localStorage.getItem('expenseArray' == null)){
    localStorage.setItem('expenseArray', '[]');
}
let data = JSON.parse(localStorage.getItem('expenseArray'));
const initialState = {
    budget: {
        text: 0,
    },
    expenses: data
    // [
    //     { id: 12, name: "Shopping", cost: -50.45 },
    //     { id: 13, name: "Bonus", cost: 625.37 },
    //     { id: 14, name: "Holiday", cost: -25.50 }
    // ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<AppContext.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>)
}