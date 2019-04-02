import { combineReducers } from "redux";
import actorsReducer from "./App/actors/dack";
import moviesReducer from "./App/movies/dack";

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducer
});

export default rootReducer;
