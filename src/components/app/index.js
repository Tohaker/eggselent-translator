import React, { useState } from "react";
import Translator from "components/translator";
import HeaderImage from "components/image";
import { Container, Footer } from "./styled";
import ReactGA from "react-ga";
import Frame from "components/translator/frame";

ReactGA.initialize("UA-162030091-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const rosegga_stone = {
  a: "eg",
  b: "geee",
  c: "gege",
  d: "gee",
  e: "e",
  f: "eege",
  g: "gge",
  h: "eeee",
  i: "ee",
  j: "eggg",
  k: "geg",
  l: "egee",
  m: "gg",
  n: "ge",
  o: "ggg",
  p: "egge",
  q: "ggeg",
  r: "ege",
  s: "eee",
  t: "g",
  u: "eeg",
  v: "eeeg",
  w: "egg",
  x: "geeg",
  y: "gegg",
  z: "ggee",
  "1": "egggg",
  "2": "eeggg",
  "3": "eeegg",
  "4": "eeeeg",
  "5": "eeeee",
  "6": "geeee",
  "7": "ggeee",
  "8": "gggee",
  "9": "gggge",
  "0": "ggggg",
};

const App = () => {
  const [eggTranslation, setEggTranslation] = useState("");
  const [engTranslation, setEngTranslation] = useState("");

  const translegg = (seggtance) => {
    let new_seggtance = "";

    for (let i = 0; i < seggtance.length; i++) {
      if (seggtance.charAt(i) === " ") {
        new_seggtance += " ";
        continue;
      }

      const legger = rosegga_stone[seggtance.charAt(i).toLowerCase()];

      if (legger) {
        new_seggtance += legger + " ";
      }
    }

    setEggTranslation(new_seggtance);
  };

  const gegeeggeeeeegeeeggegge = (seggtance) => {
    const input = seggtance.split(" ");
    let reggult = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "") {
        reggult += " ";
        continue;
      }

      for (let key in rosegga_stone) {
        if (rosegga_stone[key] === input[i]) {
          reggult += key;
          break;
        }
      }
    }

    setEngTranslation(reggult);
  };

  return (
    <>
      <Container>
        <HeaderImage
          redirectUrl={
            "https://www.facebook.com/groups/AGroupWhereYouCanOnlySayEgg"
          }
        />
        <Frame />
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
