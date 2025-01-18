import React, { useState } from 'react';
import WalletBalance from './WalletBalance';
import AddIncomeModal from './AddIncomeModal';
import ExpenseList from './ExpenseList';
import AddExpenseModal from './AddExpenseModal';
import { loadExpensesFromLocalStorage } from './LocalStorage';
import { Button, Card, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000); // Initial wallet balance
  const [expenses, setExpenses] = useState(loadExpensesFromLocalStorage());
  const [isAddIncomeOpen, setIsAddIncomeOpen] = useState(false);
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const addIncome = (amount) => {
    setWalletBalance((prevBalance) => prevBalance + Number(amount));
  };

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setWalletBalance((prevBalance) => prevBalance - expense.amount);
  };

  const deleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== expenseId);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    const expenseToDelete = expenses.find(expense => expense.id === expenseId);
    setWalletBalance((prevBalance) => prevBalance + expenseToDelete.amount);
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', margin: '20px 0', background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Expense Tracker
        </Typography>
        
        <Card sx={{ marginBottom: '20px', padding: '20px', background: '#e0f7fa', borderRadius: '12px' }}>
          <WalletBalance balance={walletBalance} />
        </Card>
        
        <Card sx={{ marginBottom: '20px', padding: '20px', background: '#e3f2fd', borderRadius: '12px' }}>
          <Typography variant="h6" color="secondary">Total Expenses: ${totalExpenses.toFixed(2)}</Typography>
        </Card>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button variant="contained" color="success" onClick={() => setIsAddIncomeOpen(true)}>
            + Add Income
          </Button>
          <Button variant="contained" color="error" onClick={() => setIsAddExpenseOpen(true)}>
            + Add Expense
          </Button>
        </Box>
        
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </Box>

      {isAddIncomeOpen && <AddIncomeModal onClose={() => setIsAddIncomeOpen(false)} onAddIncome={addIncome} />}
      {isAddExpenseOpen && <AddExpenseModal onClose={() => setIsAddExpenseOpen(false)} onAddExpense={addExpense} />}
    </Container>
  );
};

export default App;
