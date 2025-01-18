import React, { useState } from 'react';

function AddIncome({ onAddIncome }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount > 0) {
      onAddIncome(Number(amount));
      setAmount('');
    } else {
      alert("Please enter a valid income amount!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Income Amount"
        required
      />
      <button type="submit">Add Balance</button>
    </form>
  );
}

export default AddIncome;
