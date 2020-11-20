import React from "react";
import { useHistory } from "react-router-dom";
import { StyledAbout, StyledAboutWrapper } from "./About.style";

export const About = () => {
  const history = useHistory();
  return (
    <StyledAboutWrapper onClick={() => history.push("/hahahay")}>
      <StyledAbout>I am creating this website to learn it better.</StyledAbout>
      <StyledAbout>
        {" "}
        Ich mache diese Website, weil ich mich dadurch verbessern kann.
      </StyledAbout>
      <StyledAbout>
        Bu sayfayi kendimi gelistirmek icin olusturuyorum.
      </StyledAbout>
    </StyledAboutWrapper>
  );
};
