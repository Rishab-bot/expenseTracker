import { useState } from 'react';

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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <button type="submit">Add Balance</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddIncomeModal;
