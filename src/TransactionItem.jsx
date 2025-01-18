const TransactionItem = ({ expense, deleteExpense }) => {
    return (
      <li>
        {expense.title} - ${expense.amount} - {expense.category} - {expense.date}
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </li>
    );
  };
  
  export default TransactionItem;
  