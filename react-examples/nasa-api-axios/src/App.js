import { useState, useEffect } from "react";
import "./App.css";

import { Button, Switch } from "@mui/material";
// import { InsertPhotoIcon } from "@mui/icons-material";

import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import PhotoIcon from "@mui/icons-material/Photo";
import axios from "axios";

function App() {
  const [cosmos, setCosmos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isImage, setImage] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    axios(
      "https://api.nasa.gov/planetary/apod?api_key=2ctF9gSi039GkKTtNEzOxbUT9TgQclOr4OnB2pJP"
    )
      .then((response) => setCosmos(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const openImage = () => {
    setImage((prevCheckImage) => !prevCheckImage);
  }; //TODO:toggle with boolean

  return (
    <div className={checked ? "Dark" : "Light"}>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {isLoading && <div>Loading...</div>}
      <p>{cosmos.title}</p>
      <p>{cosmos.date}</p>
      <p>{cosmos.explanation}</p>
      {isImage && <img src={cosmos.url} alt={cosmos.title} width="200" />}
      <Button
        onClick={openImage}
        variant="contained"
        size="large"
        endIcon={<PhotoIcon />}
      >
        TOGGLE
      </Button>
      <p>{cosmos.copyright}</p>
      <IconButton aria-label="fingerprint" size="large">
        <Fingerprint fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default App;
