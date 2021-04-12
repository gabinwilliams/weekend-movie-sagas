import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import AddMovie from "../AddMovie/AddMovie";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickedMovieGenre = useSelector((store) => store.clickedMovieGenre);

  const reset = () => {
    dispatch({ type: "RESET", payload: clickedMovieGenre });
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link className="link" onClick={reset} to="/">
            <IconButton>
              <HomeIcon color="action" fontSize="large" />
            </IconButton>
          </Link>
          <h1>The Movies Saga</h1>
          <div className="addBtn">
            <Link className="link" to="/addMovie">
              <IconButton>
                <AddIcon fontSize="large"></AddIcon>
              </IconButton>
            </Link>
          </div>
        </nav>
        <div className="main">
          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/details" exact>
            <Details />
          </Route>

          <Route path="/addMovie" exact>
            <AddMovie />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
