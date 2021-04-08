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
    height: 140,
  },
});



const Details = () => {

  const movies = useSelector(store => store.movies);

  const ClickedMovie = useSelector(store => store.clickedMovie);
  const classes = useStyles();

  console.log('default movie:', ClickedMovie);

  if(ClickedMovie != {}) {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ClickedMovie.poster}
            title={ClickedMovie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {ClickedMovie.description}
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
  
  if(ClickedMovie === {}) {
    return (
      <>
        <h1>Not ready yet.</h1>
      </>
    );
  }
  

  

   
  


 

  }

export default Details;
