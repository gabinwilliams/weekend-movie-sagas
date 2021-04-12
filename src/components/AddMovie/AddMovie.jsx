import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./AddMovie.css";

const AddMovie = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      marginTop: 20,
      padding: 10,
    },
    saveBtn: {
      margin: 5,
    },
    cancelBtn: {
      margin: 5,
    },
  }));

  const genres = [
    { genre: "Adventure", id: 1 },
    { genre: "Animated", id: 2 },
    { genre: "Biographical", id: 3 },
    { genre: "Comedy", id: 4 },
    { genre: "Disaster", id: 5 },
    { genre: "Drama", id: 6 },
    { genre: "Epic", id: 7 },
    { genre: "Fantasy", id: 8 },
    { genre: "Musical", id: 9 },
    { genre: "Romantic", id: 10 },
    { genre: "Science Fiction", id: 11 },
    { genre: "Space-Opera", id: 12 },
    { genre: "Superhero", id: 13 },
  ];

  const classes = useStyles();
  const dispatch = useDispatch();

  const newMovieObj = useSelector((store) => store.newMovieObj);

  const [selectedGenre, setSelectedGenre] = useState({});
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleGetGenre = (event) => {
    console.log(event.target.value);

    for (let i = 0; i < genres.length; i++) {
      if (event.target.value == genres[i].genre) {
        setSelectedGenre({ id: genres[i].id, genre: event.target.value });
      }
    }
  };

  const handleGetTitle = (event) => {
    setSelectedTitle(event.target.value);
  };
  const handleGetUrl = (event) => {
    setSelectedUrl(event.target.value);
  };

  const handleGetDescription = (event) => {
    setSelectedDescription(event.target.value);
  };

  const submitMovie = (event) => {
    console.log("clicked");

    if (
      (selectedTitle.length > 0) &
      (selectedGenre.length >
        0 % selectedUrl.length >
        0 % selectedDescription.length >
        0)
    ) {
      dispatch({
        type: "SEND_MOVIE",
        payload: {
          genre_id: selectedGenre.id,
          title: selectedTitle,
          genre: selectedGenre.genre,
          url: selectedUrl,
          description: selectedDescription,
        },
      });
    } else {
      alert("Please fill inputs");
    }
  };

  const handleCancel = (event) => {
    console.log("clicked cancel");

    history.push("/");
  };

  return (
    <div className="container">
      <div className="formContainer">
        <form
          onChange={handleGetTitle}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField label="Enter Title" />
        </form>
        <form
          onChange={handleGetUrl}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField label="Enter image URL" />
        </form>
        <form
          onChange={handleGetDescription}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </form>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Genre</InputLabel>
          <Select native onChange={handleGetGenre}>
            <option aria-label="None" value="" />
            {genres.map((genre) => {
              return (
                <option key={genre.id} value={genre.genre}>
                  {genre.genre}
                </option>
              );
            })}
          </Select>
        </FormControl>

        <div className={classes.button}>
          <Button
            className={classes.saveBtn}
            size="small"
            variant="contained"
            onClick={submitMovie}
          >
            Save
          </Button>

          <Button
            className={classes.cancelBtn}
            onClick={handleCancel}
            size="small"
            variant="contained"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
