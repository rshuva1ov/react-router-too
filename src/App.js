import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    <Outlet />
    </div>
  );
}

