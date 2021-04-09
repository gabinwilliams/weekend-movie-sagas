import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    
    
    
    useEffect(() => {
        
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_GENRES'});
    }, []);





    const clickedMovie = (event) => {
        event.preventDefault();
        console.log('clicked:', event.target.id);

        movies.map(movie => {
            if(movie.id == event.target.id) {
              console.log('This is found move:', movie);
              dispatch({type: 'CLICKED_MOVIE', payload: movie})
        }
    })
        genres.map(genre => {
            if(genre.movie_id == event.target.id) {
                console.log('Here is the genre obj:', genre);
                dispatch({type: 'CLICKED_MOVIE_GENRE', payload: genre})
            }
        })
       
        

        history.push(`/details`);
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