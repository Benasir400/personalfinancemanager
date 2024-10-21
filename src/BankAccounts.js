import React, { useState } from 'react';
import axiosInstance from './axiosConfig';

const BankAccounts = () => {
  const [bank, setBank] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkBank = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/link-bank-account', { bank });
      setIsAuthenticated(true);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      setError('Failed to link bank account.');
      setLoading(false);
    }
  };

  return (
    <div className="bank-accounts-container">
      <h2>Link Your Bank Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLinkBank}>
        <div className="form-group">
          <label>Select Bank:</label>
          <select 
            value={bank} 
            onChange={(e) => setBank(e.target.value)} 
            required
          >
            <option value="">--Select Bank--</option>
            <option value="Chase">Chase</option>
            <option value="BankOfAmerica">Bank of America</option>
            <option value="WellsFargo">Wells Fargo</option>
            <option value="CitiBank">CitiBank</option>
          </select>
        </div>
        <button type="submit" className="btn">
          {loading ? 'Linking...' : (isAuthenticated ? 'Bank Linked' : 'Link & Authenticate Bank')}
        </button>
      </form>
    </div>
  );
};

export default BankAccounts;
