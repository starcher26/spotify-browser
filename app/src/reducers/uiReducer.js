const defaultState = {
  title: "2018 Artists",
  viewType: "artists"
};

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.title
      };

    case "UPDATE_VIEW":
      return {
        ...state,
        viewType: action.viewType
      };

    default:
      return state;
  }
};

export default uiReducer;
