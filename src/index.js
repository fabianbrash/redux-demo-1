import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { bankingReducer } from './reducers/bankingReducers';
import { rootReducer } from './reducers/combineReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// actions 

/* deposit

const deposit = {
      type: "DEPOSIT",
      amount: 20
}

withdraw
const withdraw = {
  type: "WITHDRAW",
  amount: 30
}

collect interest

const collectInterest = {
  type: "COLLECT_INTEREST",
}

delete account

const deleteAccount = {
  type: "DELETE_ACCOUNT"
}




*/