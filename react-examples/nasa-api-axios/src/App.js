import { useState, useEffect } from "react";
import "./App.css";

import Button from "@mui/material/Button";
// import { InsertPhotoIcon } from "@mui/icons-material";

import axios from "axios";

function App() {
  const [cosmos, setCosmos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isImage, setImage] = useState(false);

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
    <div className="App">
      {isLoading && <div>Loading...</div>}
      <p>{cosmos.title}</p>
      <p>{cosmos.date}</p>
      <p>{cosmos.copyright}</p>
      <p>{cosmos.explanation}</p>
      {isImage && <img src={cosmos.url} alt={cosmos.title} width="200" />}

      <Button onClick={openImage}>LALALA</Button>
    </div>
  );
}

export default App;
