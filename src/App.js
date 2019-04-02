import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { moviesActions } from "./App/movies/dack";

const store = createStore(rootReducer, composeWithDevTools());

window.store = store;

store.dispatch(moviesActions.add("Rambo V"));

class App extends Component {
  render() {
    console.log(store);
    return (
      <div className="App">
        <header className="App-header">
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
