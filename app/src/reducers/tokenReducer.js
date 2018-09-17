export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    // add token to state array
    case "SET_TOKEN":
      return {
        ...state, // state speading
        token: action.token
      };

    default:
      return state;
  }
};

export default tokenReducer;
