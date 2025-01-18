import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const AddExpenseModal = ({ onClose, onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && price && category && date) {
      const newExpense = {
        id: Date.now(),
        title,
        amount: parseFloat(price),
        category,
        date,
      };
      onAddExpense(newExpense);
      onClose();
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Add Expense</DialogTitle>
      <DialogContent>
        <TextField
          label="Expense Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: '#fafafa',
            }
          }}
        />
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: '#fafafa',
            }
          }}
        />
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} sx={{ borderRadius: '12px' }}>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: '#fafafa',
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Add Expense</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExpenseModal;
