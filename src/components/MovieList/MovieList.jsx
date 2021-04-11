import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css';


const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 345,
      padding: 20,
      margin: 5,
      
    
      
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        objectFit: 'contain',
        height: 300,
        width: 300,
        
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
  });



function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const clickedMovieGenre = useSelector(store => store.clickedMovieGenre);

    const classes = useStyles();

   
    
    
    
    useEffect(() => {
        
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_GENRES'});
    }, []);





    const clickedMovie = (event) => {
        event.preventDefault();
        console.log('clicked:', event.target.id);
// resets the clickedMovieGenre so it doesn't double render genres
        dispatch({type: 'RESET', payload: clickedMovieGenre});

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
            
            <section className="movies">
                {movies.map(movie => {
                    return (


                        <Card key={movie.id} className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.image}
                            onClick={clickedMovie}
                            id={movie.id}
                            component="img"
                            alt={movie.title}
                            image={movie.poster}
                            title="Poster"
                          />
                          <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions> */}
                      </Card>


                        // <div 
                        //     key={movie.id} >
                        //     <h3>{movie.title}</h3>

                        //         <img src={movie.poster} alt={movie.title} id={movie.id} 
                        //             onClick={clickedMovie} />
                            
                           
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;