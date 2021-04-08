import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const clickedMovie = (event) => {
        event.preventDefault();
        console.log('clicked:', event.target.id);
        
        dispatch({type: 'CLICKED_MOVIE', payload: {
            id: event.target.id,
        }
    })
        history.push('/details');
    }
   
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                            key={movie.id} >
                            <h3>{movie.title}</h3>

                                <img src={movie.poster} alt={movie.title} id={movie.id} 
                                    onClick={clickedMovie} />
                            
                           
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;