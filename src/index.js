import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchAllGenres() {
  // get all movie genres from the DB
  try {
    const moviesGenres = yield axios.get("/api/genre");
    console.log("get all:", moviesGenres.data);
    yield put({ type: "SET_GENRES", payload: moviesGenres.data });
  } catch {
    console.log("get all error");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

const clickedMovie = (
  state = {
    poster: "movie poster here",
    title: "movie title",
    description: "movie description",
  },
  action
) => {
  if (action.type === "CLICKED_MOVIE") {
    state = action.payload;
  }
  return state;
};

const clickedMovieGenre = (
  state = [],

  action
) => {
  if (action.type === "CLICKED_MOVIE_GENRE") {
    state = [...state, action.payload];
  }
  if (action.type === "RESET") {
    state = [];
  }
  return state;
};

const newMovieObj = (
  state = {},

  action
) => {
  if (action.type === "SEND_MOVIE") {
    state = [action.payload];

    console.log("In newMovieObj to send:", action.payload);
    axios
      .post("/api/movie", action.payload)
      .then((response) => {})
      .catch((err) => {
        console.log("Error in POST", err);
      });
  }

  if (action.type === "RESET_MOVIE") {
    state = [];
  }
  return state;
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    clickedMovie,
    clickedMovieGenre,
    newMovieObj,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
