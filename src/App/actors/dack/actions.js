import types from "./types";

const add = item => ({ type: types.ADD_ACTORS, item });
const reset = () => ({ type: types.RESET_ACTORS });

export default {
  add,
  reset
};
