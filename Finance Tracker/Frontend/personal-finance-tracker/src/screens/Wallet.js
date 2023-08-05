import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import TransactionDetails from '../components/Transactions/TransactionDetails';

function FinancePage() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const [formData, setFormData] = useState({
    description: '',
    amount: null,
    type: '',
  });

  console.log(transactions);

  const { description, amount, type } = formData;

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddTransaction = (event) => {
    event.preventDefault();
    const newTransaction = { description, amount, type };
    setTransactions([...transactions, newTransaction]);
    setFormData({ type: '', description: '', amount: '' });
  };

  // const handleEditTransaction = (editedTransaction) => {
  //   // Update the edited transaction in the state and send the request to the server
  //   const updatedTransactions = transactions.map((transaction) =>
  //     transaction === editedTransaction ? editedTransaction : transaction
  //   );
  //   setTransactions(updatedTransactions);
  // };

  const handleDeleteTransaction = (deletedTransaction) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction !== deletedTransaction
    );
    setTransactions(updatedTransactions);
  };

  useEffect(() => {
    // transactions.forEach(element => {
    //   if (element.type == 'credit') {
    //     setBalance(parseInt(balance) + parseInt(element.amount))
    //   } else {
    //     setBalance(parseInt(balance) - parseInt(element.amount))
    //   }
    // });
    const totalAmount = transactions.reduce((total, transaction) => {
      if (transaction.type == 'credit') {
        return parseInt(total) + parseInt(transaction.amount)
      } else {
        return parseInt(total) - parseInt(transaction.amount)
      }
    }, 0);
    setBalance(totalAmount);
  }, [transactions]);

  return (
    <div className='bg-[#2699fb] h-screen flex   flex-col p-16 ' >
      {/* Add transaction form */}
      <h2 className='text-white text-2xl font-bold py-3' >Add Transaction</h2>
      <form className='space-x-14 flex items-center ' onSubmit={handleAddTransaction}>
        {/* <input
          type="text"
          disabled={true}
          name="date"
          value={date}
          onChange={handleInputChange}
          placeholder="Date"
        /> */}
        <textarea
          className='rounded-lg w-60 px-4 pt-2'
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          className='rounded-lg h-14 px-4'
          type="number"
          name="amount"
          value={amount}
          onChange={handleInputChange}
          placeholder="Amount"
        />
        <select className='rounded-lg h-14 px-4 w-40' value={type} onChange={handleInputChange} name="type" id="type">
          <option value="">Select</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <button className='text-white bg-green-500 p-4 rounded-xl font-bold' type="submit">Add Transaction</button>
      </form>

      {/* Transaction table */}
      <h2 className='text-white text-2xl font-bold py-3' >Transactions</h2>
      <div>
        {transactions.map((item, index) => (
          <div key={index} >
            <TransactionDetails description={item.description} amount={item.amount} type={item.type} onDelete={() => handleDeleteTransaction(item)} />
          </div>
        ))}
      </div>

      {/* Balance display */}
      <h2 className='text-white text-2xl font-bold py-3' >Balance: {balance ? '₹' : 0}{balance}</h2>
    </div>
  );
}

export default FinancePage;
