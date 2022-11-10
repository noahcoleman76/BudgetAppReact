import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";



const Budget = () => {
    const { expenses } = useContext(AppContext);
    // const [isEditing, setIsEditing] = useState(false);
    // const [amount, setAmount] = useState(0);
    // const inputRef = useRef();
    // let changeableBalance;
    // if (isEditing) {
    //     function clickStuff() {
    //         setIsEditing(false)
    //         isNaN(inputRef.current.value) ?
    //             alert('not a number') :
    //             inputRef.current.value.trim().length === 0 ?
    //                 alert('not a number') :
    //                 setAmount(parseInt(inputRef.current.value))
    //     }
    //     changeableBalance = (
    //         <>
    //             <span>Balance: $
    //                 <input
    //                     placeholder="Enter New Balance"
    //                     ref={inputRef}
    //                 ></input>
    //             </span>
    //             <button
    //                 onClick={clickStuff}
    //                 className="btn btn-primary"
    //             >Save</button>
    //         </>
    //     )
    // }
    // else {
    //     changeableBalance = (
    //         <>
    //             <span>Balance: ${amount}</span>
    //             <button
    //                 onClick={() => { setIsEditing(true); budget.text = inputRef.current.value}}
    //                 className="btn btn-primary"
    //             >Edit</button>
    //         </>
    //     )
    // }
    let reduced = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0);

    return (
        <div className="alert 
        balance 
        d-flex align-items-center justify-content-between
        mb-0">
            Balance: ${reduced.toFixed(2)}
        </div>
    )
}

export default Budget;