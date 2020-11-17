import styled from "styled-components";

export const StyledSearchBox = styled.div`
  background-color: yellow;
`;
export const StyledSearchInput = styled.input`
  background-color: orange;
  border-radius: 10px;
  & input:focus {
    outline: 0;
  }
`;
export const StyledButton = styled.button`
  border-radius: 5px;
`;

export const StyledSearchButton = styled(StyledButton)`
  background-color: aquamarine;
  cursor: pointer;
  margin: 5px;
  border-radius: 25px;
`;
