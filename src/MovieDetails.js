import React, { useEffect, useState, createContext } from "react";
import { StyledMovieImage } from "./components/Card/Card.style";
import axios from "axios";
import { useParams } from "react-router-dom";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apikey = "f7d8b455b98784f78ffb0cb58f631580";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieDetails = () => {
  const [detay, setDetay] = useState("");
  const { id } = useParams();
  console.log("id");

  // todo id ekle
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apikey,
        },
      })
      .then(({ data }) => setDetay(data))
      .catch((error) => console.log(error))
      .finally();
  }, [id]);
  return (
    <div>
      <h1>{detay.original_title}</h1>
      <StyledMovieImage
        src={baseImageUrl + detay.poster_path}
        alt={"Vielleicht wollten Sie den Bildchirm von " + " anschauen"}
      />
      <p>{detay.overview}</p>
      <p>{detay.poster_path}</p>
    </div>
  );
};
