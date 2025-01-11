import React, { useState } from "react";
import { BalanceDisplay } from "../balance/balance";
import { ExpenseMonitor } from "../ExpenseForm/expense";

export function WalletAndExpenses() {
    const [balance, setBalance] = useState(5000);

    const updateBalance = (amount) => {
        setBalance((prevBalance) => prevBalance + amount); 
    };

    return (
        <div>
            <h2>Wallet and Expenses Tracker</h2>
            <BalanceDisplay balance={balance} updateBalance={updateBalance} />
            <ExpenseMonitor balance={balance} updateBalance={updateBalance} />
        </div>
    );
}
