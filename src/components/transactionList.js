import React, { useContext } from 'react'
import { Transaction } from './transaction';
import { GlobalContext } from '../context/globalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // console.log(context);
  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
  
    </ul>
    </>
  )
}

export default TransactionList;