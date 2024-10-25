import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { FaBell, FaUser, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import './HomeScreen.css';
import Your from '../Your.gif';
const HomeScreen = () => {
  return (
    <div className="home-screen">
      {/* Navbar */}
      <AppBar position="static" color="primary" className="app-bar-animation">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h2 style={{ fontStyle: 'italic' }}>Personal Finance Manager</h2>
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

      {/* Main Content */}
      <Container sx={{ mt: 4 }} className="content-container">
        <Grid container spacing={3} className="grid-container-animation">
          <Grid item xs={12} sm={6} md={8}>
           
            {[{
              to: "/dashboard",
              title: "Go to Dashboard",
              icon: <FaChartLine />,
            }].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className="grid-item-animation">
                <Card className="feature-card">
                  <CardContent>
                    <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                      {feature.icon}
                      <span style={{ marginLeft: '8px' }}>{feature.title}</span>
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

          {/* GIF Section */}
          <Grid item xs={12} sm={6} md={4} className="gif-container">
            <img 
              src={Your}
              alt="Finance Manager Animation" 
              className="right-gif" 
            />
          </Grid>
        </Grid>
        
      </Container>
      {/* Footer */}
      <footer className="footer" style={{backgroundColor:'#007bff'}}>
        <Container >
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Personal Finance Manager. All Rights Reserved.
          </Typography>
        </Container>
      </footer>

    </div>
  );
};

export default HomeScreen;
