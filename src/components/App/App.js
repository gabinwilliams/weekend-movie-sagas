import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickedMovieGenre = useSelector(store => store.clickedMovieGenre);

  const reset = () => {
    dispatch({type: 'RESET', payload: clickedMovieGenre})
  }
  
  return (

    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>  
        <Link onClick={reset} to='/'>
          <nav>Home</nav>
        </Link> 
        <Link to='/addMovie'>
          <nav>Add Movie</nav>
        </Link>      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <Details />
        </Route>

        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>

        
      </Router>
    </div>
  );
}


export default App;
