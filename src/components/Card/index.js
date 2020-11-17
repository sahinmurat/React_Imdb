import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";
export const Card = ({ moviee, imgSrc }) => {
  return (
    <StyledCardWrapper>
      <StyledMovieImage
        src={imgSrc}
        alt={"Vielleicht wollten Sie den Bildchirm von " + moviee.title}
      />
      <StyledText>{moviee.title}</StyledText>
      {/* <StyledText>{moviee.id}</StyledText> */}
    </StyledCardWrapper>
  );
};
