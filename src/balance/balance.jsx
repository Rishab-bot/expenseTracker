import React, { useState } from "react";
import '../App.css';

export function BalanceDisplay({ balance, updateBalance }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addAmount, setAddAmount] = useState("");

    const addBalance = () => {
        setIsModalOpen(true);
    };

    const handleAddSubmit = (e) => {
        e.preventDefault(); 
        updateBalance(Number(addAmount)); 
        setAddAmount("");
        setIsModalOpen(false);
    };

    return (
        <div>
            <h3>Wallet Balance: {balance}</h3>
            <button onClick={addBalance}>+ Add Income</button>
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
                    <form onSubmit={handleAddSubmit}>
                        <h3>Add Balance</h3>
                        <input
                            type="number"
                            placeholder="Income Amount"
                            value={addAmount}
                            onChange={(e) => setAddAmount(e.target.value)}
                        />
                        <button type="submit">Add Balance</button>
                        <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
}
