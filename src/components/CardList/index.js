import React, { useContext } from "react";
import { Card } from "../Card";
import { Tasiyici } from "../../Movie";
import { StyledCardList } from "./CardList.style";

export const CardList = () => {
  const TasiyicidanGelen = useContext(Tasiyici);
  return (
    <StyledCardList>
      {TasiyicidanGelen.amovie?.map((gelen, index) => {
        return (
          <Card
            moviee={gelen}
            id={gelen.id}
            key={index}
            imgSrc={TasiyicidanGelen.baseImageUrl + gelen.poster_path}
          />
        );
      })}
    </StyledCardList>
  );
};
