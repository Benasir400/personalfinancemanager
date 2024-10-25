import React, { useState, useEffect } from 'react';
import './ExpenseTrackerHeader.css';

const ExpenseTrackerHeader = () => {
  const [date, setDate] = useState(new Date());
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [total, setTotal] = useState(0);

  // Fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then((response) => response.json())
      .then((data) => {
        const expenseAmount = data
          .filter(transaction => transaction.amount < 0)
          .reduce((acc, transaction) => acc + transaction.amount, 0);
        setExpense(Math.abs(expenseAmount));
      });

    fetch('http://localhost:5000/income')
      .then((response) => response.json())
      .then((data) => {
        const incomeAmount = data.reduce((acc, income) => acc + income.amount, 0);
        setIncome(incomeAmount);
      });

    fetch('http://localhost:5000/total')
      .then((response) => response.json())
      .then((data) => {
        const totalAmount = data.reduce((acc, total) => acc + total.amount, 0);
        setTotal(totalAmount);
      });
  }, []);

  // Navigation between months
  const nextMonth = () => {
    const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(next);
  };

  const prevMonth = () => {
    const prev = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(prev);
  };

  const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="expense-tracker-header">
      <div className="nav-section">
        <button className="nav-button" onClick={prevMonth}>&lt;</button>
        <h3>{monthYear}</h3>
        <button className="nav-button" onClick={nextMonth}>&gt;</button>
      </div>
      <div className="summary-section">
        <div className="summary-item">
          <span>EXPENSE</span>
          <span className="expense-amount">₹{expense.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>INCOME</span>
          <span className="income-amount">₹{income.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>TOTAL</span>
          <span className="total-amount">₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerHeader;
