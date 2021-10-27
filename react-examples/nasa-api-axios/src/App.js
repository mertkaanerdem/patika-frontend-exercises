import { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [cosmos, setCosmos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(
      "https://api.nasa.gov/planetary/apod?api_key=2ctF9gSi039GkKTtNEzOxbUT9TgQclOr4OnB2pJP"
    )
      .then((response) => setCosmos(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      <p>{cosmos.title}</p>
      <p>{cosmos.date}</p>
      <p>{cosmos.copyright}</p>
      <p>{cosmos.explanation}</p>
      <img src={cosmos.url} alt={cosmos.title} width="200" />
    </div>
  );
}

export default App;
