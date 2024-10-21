import React, { useState } from 'react';
import axiosInstance from './axiosConfig';
import './Notifications.css';

const Notifications = () => {
  const [hourlyReminder, setHourlyReminder] = useState(false);
  const [missedEntryReminder, setMissedEntryReminder] = useState(false);
  const [monthlySavingsReminder, setMonthlySavingsReminder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSavePreferences = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/update-notifications', {
        hourlyReminder,
        missedEntryReminder,
        monthlySavingsReminder
      });
      setSuccess('Notification preferences updated successfully.');
      setLoading(false);
    } catch (error) {
      setError('Failed to update notification preferences.');
      setLoading(false);
    }
  };

  return (
    <div className="notifications-container">
      <h2>Manage Your Notifications</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="notification-option">
        <label>
          <input 
            type="checkbox" 
            checked={hourlyReminder} 
            onChange={() => setHourlyReminder(!hourlyReminder)} 
          />
          Hourly Night Expense Reminder
        </label>
      </div>
      <div className="notification-option">
        <label>
          <input 
            type="checkbox" 
            checked={missedEntryReminder} 
            onChange={() => setMissedEntryReminder(!missedEntryReminder)} 
          />
          Missed Entry Reminder (Allow Next-Day Input)
        </label>
      </div>
      <div className="notification-option">
        <label>
          <input 
            type="checkbox" 
            checked={monthlySavingsReminder} 
            onChange={() => setMonthlySavingsReminder(!monthlySavingsReminder)} 
          />
          Monthly Savings Notification (Encourage Emergency Fund)
        </label>
      </div>
      <button 
        className="btn" 
        onClick={handleSavePreferences}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Preferences'}
      </button>
    </div>
  );
};

export default Notifications;
