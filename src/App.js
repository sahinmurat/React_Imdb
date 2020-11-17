import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";
import "./App.css";

const baseUrl = "https://api.themoviedb.org/3/search/movie";
const apikey = "f7d8b455b98784f78ffb0cb58f631580";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function App() {
  const [amovie, setMovie] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("matrix");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apikey,
          page: 1,
          query: searchKeyWord,
        },
      })
      .then(({ data }) => setMovie(data.results))
      .catch((error) => console.log(error));
  }, [searchKeyWord]);

  return (
    <div className="App">
      <SearchBox setSearchKeyWord={setSearchKeyWord} />
      <CardList movie={amovie} imageUrl={baseImageUrl} />
    </div>
  );
}

export default App;
