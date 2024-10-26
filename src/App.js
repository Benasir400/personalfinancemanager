// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './components/HomeScreen';
import TransactionPage from './components/TransactionPage';
import NotificationPage from './components/NotificationPage';
import BudgetPage from './components/BudgetPage';
import ProfilePage from './components/ProfilePage';
import LogoutPage from './components/LogoutPage';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
