import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
  const [expense, setExpense] = useState({
    title: '',
    price: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (expense.price > 0 && expense.title && expense.category && expense.date) {
      onAddExpense(expense);
      setExpense({ title: '', price: '', category: '', date: '' });
    } else {
      alert("Please fill out all fields correctly!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={expense.title}
        onChange={handleChange}
        placeholder="Expense Title"
        required
      />
      <input
        type="number"
        name="price"
        value={expense.price}
        onChange={handleChange}
        placeholder="Expense Amount"
        required
      />
      <select
        name="category"
        value={expense.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
