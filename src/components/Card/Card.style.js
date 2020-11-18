import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 9.375rem;
  height: 12.5rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: 2s;

  &:hover {
    transform: scale(1.2, 1);
    box-shadow: 30px 2px 10px green;
  }
`;

export const StyledText = styled.p`
  color: brown;
  margin: 0;
  font-size: 0.5rem;
`;
export const StyledMovieImage = styled.img`
  width: auto;
  height: 75%;
  border: 3px solid red;
  margin: 5px;
  font-size: 0.7rem;
  color: blue;
`;
