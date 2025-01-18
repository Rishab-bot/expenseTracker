import React, { useState, useEffect } from 'react';
import WalletBalance from './WalletBalance';
import AddIncomeModal from './AddIncomeModal';
import ExpenseList from './ExpenseList';
import AddExpenseModal from './AddExpenseModal';
import { loadExpensesFromLocalStorage } from './LocalStorage';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000); // Initial wallet balance
  const [expenses, setExpenses] = useState(loadExpensesFromLocalStorage());
  const [isAddIncomeOpen, setIsAddIncomeOpen] = useState(false);
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  // Update balance after adding income
  const addIncome = (amount) => {
    setWalletBalance(prevBalance => prevBalance + Number(amount));
  };

  // Update expenses after adding or deleting expense
  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setWalletBalance(prevBalance => prevBalance - expense.amount); // Deduct from wallet balance
  };

  const deleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== expenseId);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    // Update wallet balance after deletion
    const expenseToDelete = expenses.find(expense => expense.id === expenseId);
    setWalletBalance(prevBalance => prevBalance + expenseToDelete.amount);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <WalletBalance balance={walletBalance} />
      <button onClick={() => setIsAddIncomeOpen(true)}>+ Add Income</button>
      <button onClick={() => setIsAddExpenseOpen(true)}>+ Add Expense</button>

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      {isAddIncomeOpen && <AddIncomeModal onClose={() => setIsAddIncomeOpen(false)} onAddIncome={addIncome} />}
      {isAddExpenseOpen && <AddExpenseModal onClose={() => setIsAddExpenseOpen(false)} onAddExpense={addExpense} />}
    </div>
  );
};

export default App;
