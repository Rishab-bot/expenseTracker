import React from 'react';

function WalletBalance({ balance }) {
  return (
    <div>
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

export default WalletBalance;
