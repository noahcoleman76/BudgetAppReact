import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './componants/Budget'
import Remaining from './componants/Remaining'
import Spent from './componants/Spent'
import ExpenseList from './componants/ExpenseList';
import AddExpenseForm from './componants/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import './style.css';
import hand from './images/hand.png'

const App = () => {
  return (
    <AppProvider>
      <div className='container big-border'>
        <div className='mt-3 d-flex align-items-center'>
          <img className='balanced' alt='logo' src={hand}></img>
          <h1 className='title'>Balanced</h1>
        </div>
        
        <div className='row mt-3'>
            <Budget />
          <div className='col-sm mb-4'>
            <Remaining />
            <Spent />
          </div>
        </div>
        <h1 className='mt-0'>Add Transaction</h1>
        <div className='mt-3'>
          <div className='col-sm mb-3'>
            <AddExpenseForm />
          </div>
        </div>
        <h3 className='m-0 history'>History</h3>
        <div className='row mt-0'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        
        
      </div>
    </AppProvider>
  )
}

export default App;

// add an "are you sure" button to delete expense
// push app to localstorage