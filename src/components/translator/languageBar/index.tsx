import React from "react";
import { BarContainer, Language, Swapper } from "./styled";
import { Props, Langs } from "./languageBar.types";

const LanguageBar: React.FC<Props> = ({ onChange }) => {
  const [leftText, setLeftText] = React.useState(Langs.ENGLISH);
  const [rightText, setRightText] = React.useState(Langs.EGG);

  const swapLanguages = () => {
    setLeftText(rightText);
    onChange(rightText); // Calling the change with the NEW language
    setRightText(leftText);
  };

  return (
    <BarContainer>
      <Language>{leftText}</Language>
      <Swapper onClick={swapLanguages} />
      <Language>{rightText}</Language>
    </BarContainer>
  );
};

export default LanguageBar;
