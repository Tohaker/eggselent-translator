import React from "react";
import styled from "styled-components";

interface Props {
  isInput?: boolean;
}

const TextContainer = styled.div`
  border-style: ${(props: Props) => {
    return props.isInput ? "hidden solid hidden hidden" : "hidden";
  }};

  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  width: 100%;
  padding: 12px;

  display: flex;
`;

const TextBox = styled.textarea`
  border-width: 0;
  resize: none;
  width: 100%;
  height: 100%;
  font-family: "Roboto", arial, sans-serif;
  font-size: 24px;
`;

const Delete = styled.div`
  height: 24px;
  width: 24px;
  background-position: 0 -192px
  background-image: url("https://ssl.gstatic.com/translate/1x_mobile.png");
`;

const Text: React.FC<Props> = ({ isInput }) => {
  const [text, setText] = React.useState("");

  const deleteText = () => {
    setText("");
  };

  return (
    <TextContainer isInput={isInput}>
      <TextBox
        readOnly={!isInput}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      {isInput && text !== "" && <Delete onClick={deleteText} />}
    </TextContainer>
  );
};

export default Text;
