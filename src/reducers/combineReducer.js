import { combineReducers } from 'redux';
import { bankingReducer } from './bankingReducers';
import { authReducer } from './authReducers';
//import Banking from '../components/Banking';

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer,
})


/* This is what our store object is going to look like


const store = {
    auth: {
        isLoggedIn: false,
    },
    banking: {
        balance: 0,
        isSavingsAccount: false,
    }
}
*/