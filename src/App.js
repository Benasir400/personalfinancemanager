import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import PaymentApps from './PaymentApps';
import BankAccounts from './BankAccounts';
import Notifications from './Notifications';
import Settings from './Settings';
import Logout from './Logout';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/payment-apps">Link Payment Apps</Link></li>
            <li><Link to="/bank-accounts">Link Bank Accounts</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/settings">Security & Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/payment-apps" element={<PaymentApps />} />
          <Route path="/bank-accounts" element={<BankAccounts />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
