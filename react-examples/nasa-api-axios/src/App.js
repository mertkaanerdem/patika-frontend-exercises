import { useState, useEffect } from "react";
import "./App.css";

import { Box, Typography, Switch, Button } from "@mui/material";
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
    <Box className={checked ? "Dark" : "Light"}>
      <Box sx={{ width: "100%", maxWidth: 768 }}>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        {isLoading && <div>Loading...</div>}
        <Typography variant="h3" component="h3">
          {cosmos.title}
        </Typography>

        <Typography variant="overline" display="block" gutterBottom>
          {cosmos.date}
        </Typography>

        <Typography className="explanation" variant="body1" gutterBottom>
          {cosmos.explanation}
        </Typography>
        {isImage && (
          <img className="image" src={cosmos.url} alt={cosmos.title} />
        )}
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
          <a href="https://github.com/mertkaanerdem" target="_blank">
            <Fingerprint fontSize="inherit" />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
}

export default App;
