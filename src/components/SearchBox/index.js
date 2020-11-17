import { useRef } from "react";
import {
  StyledSearchBox,
  StyledSearchButton,
  StyledSearchInput,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyWord }) => {
  const inputRef = useRef();
  return (
    <StyledSearchBox>
      <StyledSearchInput ref={inputRef} />
      <StyledSearchButton
        onClick={() => setSearchKeyWord(inputRef.current.value)}
      >
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
