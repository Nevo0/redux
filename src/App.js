import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, combineReducers, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//z urzyciem tej funkcji createStore utworzymy pierwszy prosty stor w ktorym bedziemy pezecoowycwac filmiki

//  createStore  przyjmuje funkcje

const initialMovies = {
  listName: "Favourite",
  list: ["RamboIII", "Hakerzy", "Matrix"]
};
const initialActors = {
  listName: "Best",
  list: ["Tom Hanks", "Julia Roberts", "Angelina Jolie"]
};
// funkcja ktora jest reducerem

function movies(state = initialMovies, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, list: [...state.list, action.item] };
    case "RESET_MOVIE":
      return { ...state, list: [] };
    default:
      return state;
  }
}

function actors(state = initialActors, action) {
  switch (action.type) {
    case "ADD_ACTORS":
      return { ...state, list: [...state.list, action.item] };
    case "RESET_ACTORS":
      return { ...state, list: [] };
    default:
      return state;
  }
}

// tworzymy zmienna o nazwie store i utworzymy stora z urzycie m fiunkcji creat stor
//przekazujemy naszsego reducera 'movies'

const allReducers = combineReducers({ movies, actors });
const store = createStore(allReducers, composeWithDevTools());

const addActor = item => ({ type: "ADD_ACTORS", item });
const resetActors = () => ({ type: "RESET_ACTORS" });
const addFilm = item => ({ type: "ADD_MOVIE", item });
const resetFilm = () => ({ type: "RESET_MOVIE" });

const actorsActions = bindActionCreators(
  { add: addActor, reset: resetActors },
  store.dispatch
);

const filmsActions = bindActionCreators(
  { add: addFilm, reset: resetFilm },
  store.dispatch
);
store.dispatch(addActor("Cezary Pazura"));

actorsActions.add("Jan Frycz");
filmsActions.add("Norma");
actorsActions.reset();
filmsActions.reset();

// przypiujemy nasz stor  do window aby miec szybki dostep do niego
window.store = store;

class App extends Component {
  render() {
    console.log(store);
    return (
      <div className="App">
        <header className="App-header">
          <Coś />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

function bizz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
function silnia(n) {
  let x = 1;
  // console.log(n);

  for (let i = 1; i <= n; i++) {
    x = x * i;
    console.log(x);
  }
  console.log(x);
}

function fibonacci(n) {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 1);
}
silnia(3);

["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"].map(m =>
  console.log(m)
);
console.log(
  ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"].map(parseInt)
);
window.fibonacci = fibonacci;
// bizz();
