import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    maxWidth: 600,
  },
  media: {
   
    height: 400,
    objectFit: 'contain',
    
  },
  span: {
    
    margin: 5,
    color: 'white',
    padding: 5,
    backgroundColor: '#f2a154',
    borderRadius: 10,
  },
  details: {
    marginTop: 15,
    
  },
  genres: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

});



const Details = () => {

  const genres = useSelector(store => store.genres);
  const movies = useSelector(store => store.movies);
  const clickedMovieGenre = useSelector(store => store.clickedMovieGenre);


  const clickedMovie = useSelector(store => store.clickedMovie);
  const classes = useStyles();
  const dispatch = useDispatch();

  
    
  

  


  console.log('default movie:', clickedMovie);
  console.log('does this log out at all??');
  console.log('genres movie object', genres);
  console.log('clicked movie genre obj', clickedMovieGenre);

  
  
    return (

      <div className="cardContainer">
        
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              image={clickedMovie.poster}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
              {clickedMovie.title}
              </Typography>
              <Typography className={classes.genres} variant="body1" component="p">
                  {clickedMovieGenre.map(genre => {
                    return (<span key={genre.id} className={classes.span}>{genre.genre}</span> )
                  })}
              
              </Typography>
              <Typography className={classes.details} variant="body2" color="textSecondary" component="p">
                {clickedMovie.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
      </div>
    );
    
  }

export default Details;
