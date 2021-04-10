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
        
          <nav>
            <Link onClick={reset} to='/'>
              Home
            </Link> 
            <Link to='/addMovie'>
               Add Movie
            </Link>  

          </nav>
            
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
