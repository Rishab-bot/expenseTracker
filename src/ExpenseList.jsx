import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.price} - {expense.category} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
