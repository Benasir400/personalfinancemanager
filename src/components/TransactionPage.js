import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const TransactionPage = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:5000/transactions');
      dispatch({ type: 'SET_TRANSACTIONS', payload: response.data });
    };
    fetchTransactions();
  }, [dispatch]);

  return (
    <div style={{backgroundColor:'#007bff'}}>
      <h1>Your Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionPage;
