import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";
export const Card = ({ moviee, imgSrc }) => {
    return (
        <StyledCardWrapper>
            <StyledMovieImage src={imgSrc} />
            <StyledText>{moviee.title}</StyledText>
            {/* <StyledText>{moviee.id}</StyledText> */}
        </StyledCardWrapper>
    );
};
