import React, { useState } from 'react';
import axiosInstance from './axiosConfig';
import './PaymentApps.css';

const PaymentApps = () => {
  const [app, setApp] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkApp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/link-payment-app', { app });
      setIsAuthenticated(true);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      setError('Failed to link payment app.');
      setLoading(false);
    }
  };

  return (
    <div className="payment-apps-container">
      <h2>Link Your Payment Apps</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLinkApp}>
        <div className="form-group">
          <label>Select Payment App:</label>
          <select 
            value={app} 
            onChange={(e) => setApp(e.target.value)} 
            required
          >
            <option value="">--Select App--</option>
            <option value="PayPal">PayPal</option>
            <option value="GooglePay">Google Pay</option>
            <option value="ApplePay">Apple Pay</option>
            <option value="Venmo">Venmo</option>
          </select>
        </div>
        <button type="submit" className="btn">
          {loading ? 'Linking...' : (isAuthenticated ? 'App Linked' : 'Link & Authenticate App')}
        </button>
      </form>
    </div>
  );
};

export default PaymentApps;
