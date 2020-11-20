import React from "react";
import { useHistory, Switch, BrowserRouter, Link, Route } from "react-router-dom";
import { StyledAbout, StyledAboutWrapper } from "./About.style";

function Page1() {
  return <h1>You are on Page1</h1>
}
function Page2() {
  return <h1>You are on Page2</h1>
}
function Page3() {
  return <h1>You are on Page3</h1>
}

export const About = () => {
  const history = useHistory();

  return (
    <StyledAboutWrapper onClick={() => history.push("/hahahay")}>
      <BrowserRouter>
        <Link to='/page1'>Page_1</Link>
        <Link to='/page2'>Page_2</Link>
        <Link to='/page3'>Page_3</Link>
        <Switch>
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
        </Switch>
      </BrowserRouter>




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

