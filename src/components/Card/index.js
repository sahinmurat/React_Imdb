<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"
=======
import React from "react";
import "./Card.style.css"
>>>>>>> parent of a8ed001... Update Card with css module

export const Card = ({title, imgSrc, id}) => {
    const history = useHistory();
    return (
<<<<<<< HEAD
        <StyledCardWrapper onClick={() => history.push(`/detail/${id}`)}>
            <StyledMovieImage src={imgSrc} alt={"Movie Poster"}/>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
=======
        <div className="card-wrapper">
            <p>CARD</p>
        </div>
>>>>>>> parent of a8ed001... Update Card with css module
    )
}