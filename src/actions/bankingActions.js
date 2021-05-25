export const deposit = (amount) => {
    return {type: "DEPOSIT", amount: parseFloat(amount)}


}

export const withdraw = (amount) => {
    return {type: "WITHDRAW", amount: parseFloat(amount)}

    
}


export const collectInterest = () => {
    return {type: "COLLECT_INTEREST"}

    
}


export const deleteAccount = () => {
    return {type: "DELETE_ACCOUNT"}

    
}

export const toggleAccount = () => {
    return {type: "TOGGLE_ACCOUNT"}
}

