import TransactionItem from './TransactionItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {expenses.map(expense => (
          <TransactionItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
