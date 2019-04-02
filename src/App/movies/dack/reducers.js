import types from "./types";

const INITIAL_STATE = {
  listName: "Favourite",
  list: ["RamboIII", "Hakerzy", "Matrix"]
};

const moviesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return { ...state, list: [...state.list, action.item] };
    case types.RESET_MOVIE:
      return { ...state, list: [] };
    default:
      return state;
  }
};
export default moviesReducers;
