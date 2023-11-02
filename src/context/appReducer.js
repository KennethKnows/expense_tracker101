const initialState = {
    transactions: [] // Initial state for transactions is an empty array
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions] // Corrected to 'transactions' instead of 'transaction'
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  