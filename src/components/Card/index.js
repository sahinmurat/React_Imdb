import { useHistory } from "react-router-dom";
import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";
export const Card = ({ moviee, imgSrc }) => {
  const history = useHistory();
  return (
    <StyledCardWrapper onClick={() => history.push(`/detail/${moviee.id}`)}>
      <StyledMovieImage
        src={imgSrc}
        alt={
          "Vielleicht wollten Sie den Bildchirm von " +
          moviee.title +
          " anschauen"
        }
      />
      <StyledText>{moviee.title}</StyledText>
      <StyledText>{moviee.id}</StyledText>
    </StyledCardWrapper>
  );
};
