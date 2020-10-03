const reducer = (state, action) => {
 switch (action.type) {
  case "REGISTER_REQUEST":
   return {
    ...state,
    user: action.payload,
   };

  default:
   return state;
 }
};

export default reducer;
