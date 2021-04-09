import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import {Link} from 'react-router-dom';

function App() {

  
  return (
    
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>  
        <Link to='/'>
          <nav>Home</nav>
        </Link>      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
