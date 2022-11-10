import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent = () => {
    const { expenses } = useContext(AppContext);

    let spent = 0;
    expenses.forEach(item => {
        if (item.cost < 0) {
            spent = spent + (item.cost * -1)
        }
    });

    return (
            <span className="expenses">Expenses: ${spent.toFixed(2)}</span>
    )
}
export default Spent;