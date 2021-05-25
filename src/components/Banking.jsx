import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw, collectInterest, deleteAccount, toggleAccount } from '../actions/bankingActions';

const Banking = () => {

    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const handleDeposit = () => {
        //dispatch({type: "DEPOSIT", amount: parseInt(amount)})
        dispatch(deposit(amount));

    }

    const handleWithdraw = () => {
        //dispatch({type: "WITHDRAW", amount: parseInt(amount)})
        dispatch(withdraw(amount));
        
    }

    const handleCollectInterest = () => {
        //dispatch({type: "COLLECT_INTEREST"})
        dispatch(collectInterest());
        
    }

    const handleDelete = () => {
        //dispatch({type: "DELETE_ACCOUNT"})
        dispatch(deleteAccount());
        setAmount("");
        
    }

    const handleAccountChange = () => {
        dispatch(toggleAccount());
        
    }


    return (
        <div className="form-group">
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" className="form-control" />
            <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
            <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
        </div>
    );
}

export default Banking
