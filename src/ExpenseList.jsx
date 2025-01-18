import TransactionItem from './TransactionItem';
import { Box, Typography, Card } from '@mui/material';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <Card sx={{ marginTop: '20px', padding: '20px', backgroundColor: '#f1f8e9', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom>Transactions</Typography>
      <Box>
        {expenses.map((expense) => (
          <TransactionItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
        ))}
      </Box>
    </Card>
  );
};

export default ExpenseList;
