
const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEPOSIT":
            //Logic for deposit
            return state + action.amount
        case "WITHDRAW":
            //Logic for Withdraw
            return state - action.amount
        case "COLLECT_INTEREST":
            //Logic for interest
            return state * 1.10
        case "DELETE_ACCOUNT":
            //Logic for delete account
            return 0
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
