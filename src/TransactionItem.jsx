import { Button, Box, Typography } from '@mui/material';

const TransactionItem = ({ expense, deleteExpense }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        marginBottom: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {expense.title} - ${expense.amount} - {expense.category} - {expense.date}
      </Typography>
      <Button onClick={() => deleteExpense(expense.id)} color="error" variant="contained" sx={{ borderRadius: '8px' }}>
        Delete
      </Button>
    </Box>
  );
};

export default TransactionItem;
