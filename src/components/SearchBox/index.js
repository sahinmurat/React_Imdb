import { useState } from "react";
import {
  StyledSearchBox,
  StyledSearchButton,
  StyledSearchInput,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyWord }) => {
  const [inp, setInp] = useState("");
  return (
    <StyledSearchBox>
      <StyledSearchInput onChange={(e) => setInp(e.target.value)} />
      <StyledSearchButton onClick={() => setSearchKeyWord(inp)}>
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
