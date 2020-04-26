import React from "react";
import { CopyButton } from "./styled";
import { Props } from "./copyButton.types";

const CopyToClipboard: React.FC<Props> = ({ textAreaRef }) => {
  const copyTextToClipboard = () => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <CopyButton
      onClick={copyTextToClipboard}
      type="image"
      src="https://img.icons8.com/metro/26/000000/clipboard.png"
    />
  );
};

export default CopyToClipboard;
