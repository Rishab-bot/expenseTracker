import React, { useState } from 'react';
import WalletBalance from './WalletBalance';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';

function App() {
  const [balance, setBalance] = useState(5000); // Default wallet balance
  const [expenses, setExpenses] = useState([]); // List of expenses
  const [isIncomeFormVisible, setIncomeFormVisible] = useState(false);
  const [isExpenseFormVisible, setExpenseFormVisible] = useState(false);

  const handleAddIncome = (amount) => {
    setBalance(balance + amount);
    setIncomeFormVisible(false); // Hide the form after adding income
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.price); // Update balance after adding expense
    setExpenseFormVisible(false); // Hide the form after adding expense
  };

  return (
    <div className="App">
      <WalletBalance balance={balance} />
      <button type="button" onClick={() => setIncomeFormVisible(true)}>
        + Add Income
      </button>
      {isIncomeFormVisible && <AddIncome onAddIncome={handleAddIncome} />}
      
      <button type="button" onClick={() => setExpenseFormVisible(true)}>
        + Add Expense
      </button>
      {isExpenseFormVisible && <AddExpense onAddExpense={handleAddExpense} />}
      
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
