import React, { useRef } from "react";
import {
  InputText,
  TranslateButton,
  OutputText,
  Container,
  CopyContainer,
  InputTitle,
  OutputTitle,
  Separator,
} from "components/translator/styled";
import CopyButton from "./copyButton";

const Translator = ({ title, buttonText, onClickHandler, translation }) => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <InputText ref={inputRef} />
      <TranslateButton onClick={() => onClickHandler(inputRef.current.value)}>
        {buttonText}
      </TranslateButton>
      <CopyContainer>
        <OutputTitle>Transleggtion:</OutputTitle>
        <Separator />
        <CopyButton textAreaRef={outputRef} />
      </CopyContainer>
      <OutputText ref={outputRef} value={translation} readOnly />
    </Container>
  );
};

export default Translator;
