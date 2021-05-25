
//const initialState = 0;

const initialState = {
    balance: 0,
    isSavingsAccount: false,
};

export const bankingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEPOSIT":
            //Logic for deposit
            //return state + action.amount
            //return { balance: state.balance + action.amount };
            return { ...state, balance: state.balance + action.amount };
        case "WITHDRAW":
            //Logic for Withdraw
            //return state - action.amount
            //return { balance: state.balance - action.amount };
            return { ...state, balance: state.balance - action.amount };
        case "COLLECT_INTEREST":
            //Logic for interest
            //return state * 1.10
              //return { balance: state.balance * 1.10 };
              return { ...state, balance: state.balance * 1.10 };
        case "DELETE_ACCOUNT":
            //Logic for delete account
            //return { balance: 0 };
            return { ...state, balance: 0 };
        case "TOGGLE_ACCOUNT":
            //return { isSavingsAccount: !state.isSavingsAccount }
            return { ...state, isSavingsAccount: !state.isSavingsAccount }
        default:
            return state
    }

}

//actions

/*
const deposit = {
    type: "DEPOSIT",
    amount: 20
}

// withdraw
const withdraw = {
type: "WITHDRAW",
amount: 30
}

// collect interest

const collectInterest = {
type: "COLLECT_INTEREST",
}

// delete account

const deleteAccount = {
type: "DELETE_ACCOUNT"
}

*/
