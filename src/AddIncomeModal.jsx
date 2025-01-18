import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AddIncomeModal = ({ onClose, onAddIncome }) => {
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incomeAmount) {
      onAddIncome(incomeAmount);
      onClose();
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Add Income</DialogTitle>
      <DialogContent>
        <TextField
          type="number"
          label="Income Amount"
          variant="outlined"
          fullWidth
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
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
        <Button onClick={handleSubmit} color="primary">Add Balance</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddIncomeModal;
