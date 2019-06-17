import initialState from "../Store/initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
       state.loading = true;
       return state;
    case 'RECIEVE_USER':
      state.user = action.user;
      state.company = action.company;
      state.loading = false;
       return state;
    case 'SET_TO': 
      state.address.to = action.address;
      return state;
    case 'SET_FROM':
      state.address.from = action.address;
      return state;
     default:
      return state
    }
   }