
function data(state, action) {

  switch (action.type) {
    case 'HANDLE_TX_DATA': {
      return {
          txData:action.payload.txData,
      };
    }
    default:
      return state
  }
}

export default data;
