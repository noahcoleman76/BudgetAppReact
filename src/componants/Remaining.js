import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const {expenses} = useContext(AppContext);

    let income = 0;
    expenses.forEach(item => {
        if (item.cost > 0) {
            income = income + item.cost
        }
    });

    return (
            <span className="income">Income: ${income.toFixed(2)}</span>
    )
}

export default Remaining;