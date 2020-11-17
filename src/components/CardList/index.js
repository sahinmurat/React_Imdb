import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movie, imageUrl }) => {
    return (
        <StyledCardList>
            {movie?.map((gelen, index) => {
                return (
                    <Card
                        moviee={gelen}
                        key={index}
                        imgSrc={imageUrl + gelen.poster_path}
                    />
                );
            })}
        </StyledCardList>
    );
};
