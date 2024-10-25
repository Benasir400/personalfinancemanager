import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const AccountCard = ({ account }) => {
  return (
    <Card sx={{ bgcolor: '#007bff', color: '#fff' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center" fontSize="40px">
          {account.icon}
        </Box>
        <Typography variant="h6" align="center">
          {account.name}
        </Typography>
        <Typography variant="body2" align="center">
          Current Balance: {account.balance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
