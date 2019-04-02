import types from "./types";

const add = item => ({ type: types.ADD_MOVIE, item });
const reset = () => ({ type: types.RESET_MOVIE });

export default { add, reset };
