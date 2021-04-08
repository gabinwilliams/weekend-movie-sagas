import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    maxWidth: 345,
  },
  media: {
    height: 400,
    objectFit: 'contain',
  },
});



const Details = () => {

  const movies = useSelector(store => store.movies);

  const clickedMovie = useSelector(store => store.clickedMovie);
  const classes = useStyles();
  const dispatch = useDispatch();

  

  const getMovie = () =>{
    movies.map(movie => {
      if(movie.id == clickedMovie.id) {
        console.log('This is found move:', movie);
        dispatch({type: 'CLICKED_MOVIE', payload: movie})
      }
     
    })
  } 

  getMovie();
  // if()

  console.log('default movie:', clickedMovie);
  console.log('does this log out at all??');

  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={clickedMovie.poster}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {clickedMovie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {clickedMovie.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  
  }

export default Details;
