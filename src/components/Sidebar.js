import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const menuItems = [
  { text: 'Account', icon: <AccountBalanceIcon /> },
  { text: 'Add Budget', icon: <AttachMoneyIcon /> },
  { text: 'Add Income', icon: <TrendingUpIcon /> },
  { text: 'Add Expenses', icon: <PaymentIcon /> },
  { text: 'Set Goals', icon: <ListAltIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

const Sidebar = () => {
  return (
    <Box sx={{ width: 240, bgcolor: '#007bff', height: '100vh', paddingTop: '20px' }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
