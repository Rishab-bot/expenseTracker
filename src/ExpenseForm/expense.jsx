import React, { useState } from "react";

export function ExpenseMonitor({ balance, updateBalance }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenseDetails, setExpenseDetails] = useState({
        price: "",
        title: "",
        category: "",
        date: "",
    });

    const expDetails = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseDetails({ ...expenseDetails, [name]: value });
    };

    const handleExpenseSubmit = (e) => {
        e.preventDefault(); 
        const expenseAmount = Number(expenseDetails.price);
        if (expenseAmount > balance) {
            alert("Insufficient balance!");
        } else {
            updateBalance(-expenseAmount); 
        }
        setExpenseDetails({ price: "", title: "", category: "", date: "" }); 
        setIsModalOpen(false); 
    };

    return (
        <div>
            <h3>Expenses</h3>
            <button type="button" onClick={expDetails}>+ Add Expense</button>
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}>
                    <form onSubmit={handleExpenseSubmit}>
                        <h3>Add Expense</h3>
                        <input
                            type="number"
                            name="price"
                            placeholder="Amount"
                            value={expenseDetails.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={expenseDetails.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={expenseDetails.category}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="date"
                            value={expenseDetails.date}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Expense</button>
                        <button
                            type="button"
                            onClick={() => {
                                setExpenseDetails({ price: "", title: "", category: "", date: "" });
                                setIsModalOpen(false);
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
