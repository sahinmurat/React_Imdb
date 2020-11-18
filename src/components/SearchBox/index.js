import { useRef, useContext } from "react";
import { Tasiyici } from "../../Movie";
import {
  StyledSearchBox,
  StyledSearchButton,
  StyledSearchInput,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyWord }) => {
  const inputRef = useRef();
  const TasiyicidanGelen = useContext(Tasiyici);
  return (
    <StyledSearchBox>
      <StyledSearchInput ref={inputRef} />
      <StyledSearchButton
        onClick={() =>
          TasiyicidanGelen.setSearchKeyWord(inputRef.current.value)
        }
      >
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
