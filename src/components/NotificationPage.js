import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const NotificationPage = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector(state => state);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('http://localhost:5000/notifications');
      dispatch({ type: 'SET_NOTIFICATIONS', payload: response.data });
    };
    fetchNotifications();
  }, [dispatch]);

  return (
    <div style={{backgroundColor:'#007bff'}}>
      <h1>Your Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
