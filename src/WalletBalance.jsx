import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const WalletBalance = ({ balance }) => {
  return (
    <Card sx={{
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #4caf50, #8bc34a)',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      color: 'white'
    }}>
      <Typography variant="h5">Wallet Balance: ${balance.toFixed(2)}</Typography>
    </Card>
  );
};

export default WalletBalance;
