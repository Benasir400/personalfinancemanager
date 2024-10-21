import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig';

const Settings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataBackup, setDataBackup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch user settings from the backend on component mount
    const fetchSettings = async () => {
      try {
        const response = await axiosInstance.get('/user-settings');
        setTwoFactorAuth(response.data.twoFactorAuth);
        setDataBackup(response.data.dataBackup);
      } catch (error) {
        setError('Failed to load settings.');
      }
    };
    fetchSettings();
  }, []);

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await axiosInstance.post('/update-settings', {
        twoFactorAuth,
        dataBackup,
      });
      setSuccess('Settings updated successfully.');
      setLoading(false);
    } catch (error) {
      setError('Failed to update settings.');
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <h2>Security & Settings</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="setting-option">
        <label>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
      <div className="setting-option">
        <label>
          <input
            type="checkbox"
            checked={dataBackup}
            onChange={() => setDataBackup(!dataBackup)}
          />
          Enable Data Backup
        </label>
      </div>
      <button className="btn" onClick={handleSaveSettings} disabled={loading}>
        {loading ? 'Saving...' : 'Save Settings'}
      </button>
    </div>
  );
};

export default Settings;
