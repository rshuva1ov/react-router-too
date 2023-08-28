import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: `1rem` }}>
      <h2>Общая сумма: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Срок: {invoice.due}</p>
    </main>
  );
}
