// Dashboard.js
import React from 'react';
import  { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaBell, FaUser, FaSignOutAlt, FaChartLine, FaWallet, FaRegLightbulb, FaChartPie, FaHeart, FaMoneyBillWave, FaCalendarAlt, FaComments, FaRocket, FaClock, FaHandHoldingHeart, FaSyncAlt, FaHeadset, FaLocationArrow, FaSearch, FaHandsHelping } from 'react-icons/fa'; // Importing icons
import Sidebar from './Sidebar';
import AccountCard from './AccountCard';
import './Dashboard.css';
import '@fontsource/merriweather/700-italic.css';
import '@fontsource/poppins/700.css';
import ExpenseTrackerHeader from './ExpenseTrackerHeader';


const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  // Fetch accounts data
  useEffect(() => {
    fetch('http://localhost:5000/accounts')
      .then((response) => response.json())
      .then((data) => setAccounts(data))
      .catch((error) => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <Box className="dashboard-container">
      {/* Sidebar */}
      <Sidebar className="dashboard-sidebar" />

      {/* Main Content */}
      <Container className="dashboard-content">
        {/* Navbar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h2 style={{ fontFamily: 'Merriweather, serif', fontStyle: 'italic', fontWeight: 700, color: 'white' }}>
                Personal Finance Manager
              </h2>
            </Typography>
            <IconButton color="inherit" component={Link} to="/notifications">
              <FaBell />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/profile">
              <FaUser />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/logout">
              <FaSignOutAlt />
            </IconButton>
          </Toolbar>
        </AppBar>

        <ExpenseTrackerHeader />

        {/* Accounts Section */}
        <Box mt={1}>
          <Grid container spacing={2}>
            {accounts.map((account, index) => (
              <Grid item xs={12} sm={6} md={4} key={account.id || index}>
                <AccountCard className="account-card" account={account} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Features Section */}
        <Typography variant="h4" align="center" gutterBottom>
        <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#c42700' }}>
  Features
</h4>
     </Typography>
        <Grid container spacing={3}>
          {/* Loop through each feature to create MUI Cards */}
          {[
            { to: "/budget", title: "Create Monthly Budget", icon: <FaChartLine /> },
            { to: "/transactions", title: "Track Daily Expenses", icon: <FaWallet /> },
            { to: "/notifications", title: "View Notifications", icon: <FaRegLightbulb /> },
            { to: "/expenses", title: "Track Daily Expenses (Manual + Auto)", icon: <FaChartPie /> },
            { to: "/emotional-tracking", title: "Emotional Spending Tracker", icon: <FaHeart /> },
             { to: "/sustainability", title: "Sustainability Score", icon: <FaCalendarAlt /> },
            { to: "/learning-hub", title: "Personalized Learning Hub", icon: <FaComments /> },
            { to: "/smart-alerts", title: "AI-Based Smart Alerts", icon: <FaRocket /> },
            { to: "/bill-reminders", title: "Bill Reminders", icon: <FaClock /> },
            { to: "/lent-amounts", title: "Track Lent Amounts", icon: <FaHandHoldingHeart /> },
            { to: "/loan-repayment", title: "Loan Repayment Ideas", icon: <FaSyncAlt /> },
            { to: "/financial-advice", title: " Financial Advice", icon: <FaHeadset /> },
            { to: "/future-planning", title: "Future-Proof Financial Planning", icon: <FaSearch /> },
            { to: "/online-payments", title: "Make Online Payments", icon: <FaRegLightbulb /> },
            { to: "/health-finance", title: "Health & Finance Integration", icon: <FaChartPie /> },
            { to: "/voice-management", title: "Voice-Assisted Financial Management", icon: <FaComments /> },
            { to: "/geo-suggestions", title: "Geo-Location Based Suggestions", icon: <FaLocationArrow /> },
            { to: "/donation-tracking", title: "Donation Integration", icon: <FaHandsHelping /> },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                    {feature.icon} {/* Display the icon */}
                    <span style={{ marginLeft: '8px' }}>{feature.title}</span> {/* Title with margin */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to={feature.to} variant="contained" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer Section */} <footer className="footer" style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#007bff" }}>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; 2024 Personal Finance Manager. All rights reserved.
          </Typography>
        </footer>
       
      </Container>
    </Box>
  );
};

export default Dashboard;
