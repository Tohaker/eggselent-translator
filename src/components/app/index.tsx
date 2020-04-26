import React from "react";
import Translator from "components/translator";
import HeaderImage from "components/image";
import { Container, Footer } from "./styled";
import ReactGA from "react-ga";

ReactGA.initialize("UA-162030091-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <>
      <Container>
        <HeaderImage
          redirectUrl={
            "https://www.facebook.com/groups/AGroupWhereYouCanOnlySayEgg"
          }
        />
        <Translator />
      </Container>
      <Footer>
        <a href="https://www.github.com/tohaker">Made with eggs by Tohaker</a>
        <br />
        <a href="https://icons8.com/icon/5361/clipboard">
          Clipboard icon by Icons8
        </a>
      </Footer>
    </>
  );
};

export default App;
