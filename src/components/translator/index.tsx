import React from "react";
import { Border, TextContainer, Delete } from "./styled";
import LanguageBar from "./languageBar";
import { Langs } from "./languageBar/languageBar.types";
import Text from "./text";
import CopyToClipboard from "./copyButton";
import { StateType, ActionType } from "./translator.types";

const roseggaStone: any = {
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

const Translator = () => {
  const [translation, setTranslation] = React.useState("");
  const [input, setInput] = React.useState("");
  const leftRef = React.useRef<HTMLTextAreaElement>(null);
  const rightRef = React.useRef<HTMLTextAreaElement>(null);

  const translegg = (seggtance: string) => {
    let new_seggtance = "";

    for (let i = 0; i < seggtance.length; i++) {
      if (seggtance.charAt(i) === " ") {
        new_seggtance += " ";
        continue;
      }

      const legger = roseggaStone[seggtance.charAt(i).toLowerCase()];

      if (legger) {
        new_seggtance += legger + " ";
      }
    }

    setTranslation(new_seggtance);
  };

  const gegeeggeeeeegeeeggegge = (seggtance: string) => {
    const input = seggtance.split(" ");
    let reggult = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "") {
        reggult += " ";
        continue;
      }

      for (let key in roseggaStone) {
        if (roseggaStone[key] === input[i]) {
          reggult += key;
          break;
        }
      }
    }

    setTranslation(reggult);
  };

  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case Langs.ENGLISH:
        return { translator: translegg };
      case Langs.EGG:
        return { translator: gegeeggeeeeegeeeggegge };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, {
    translator: translegg,
  });

  const onLanguageChange = (type: Langs) => {
    dispatch({ type });
    if (rightRef.current && leftRef.current) {
      const newLeft = rightRef.current.value;
      const newRight = leftRef.current.value;

      setInput(newLeft);
      setTranslation(newRight);
    }
  };

  const onInputUpdate = (input: string) => {
    state.translator(input);
    setInput(input);
  };

  const deleteText = () => {
    setInput("");
    setTranslation("");
  };

  return (
    <Border>
      <LanguageBar onChange={onLanguageChange} />
      <TextContainer>
        <Text
          ref={leftRef}
          value={input}
          isInput={true}
          onUpdate={onInputUpdate}
          renderProps={<Delete onClick={deleteText} />}
        />
        <Text
          ref={rightRef}
          value={translation}
          isInput={false}
          onUpdate={() => {}}
          renderProps={<CopyToClipboard textAreaRef={rightRef} />}
        />
      </TextContainer>
    </Border>
  );
};

export default Translator;
