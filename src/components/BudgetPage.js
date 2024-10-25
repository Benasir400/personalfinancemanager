import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const BudgetPage = () => {
  const dispatch = useDispatch();
  const { budget } = useSelector(state => state);

  useEffect(() => {
    const fetchBudget = async () => {
      const response = await axios.get('http://localhost:5000/budgets');
      dispatch({ type: 'SET_BUDGET', payload: response.data[0] });
    };
    fetchBudget();
  }, [dispatch]);

  return (
    <div style={{backgroundColor:'#007bff'}}>
      <h1>Your Budget</h1>
      <p>Monthly Budget: ${budget.amount}</p>
    </div>
  );
};

export default BudgetPage;
