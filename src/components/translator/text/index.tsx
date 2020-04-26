import React from "react";
import { TextContainer, TextBox } from "./styled";
import { Props } from "./text.types";

const Text = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { onUpdate, isInput, value, renderProps } = props;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate(e.currentTarget.value);
  };

  const placeholder = !isInput ? "Transleggtion" : "";

  return (
    <TextContainer hasBorder={isInput}>
      <TextBox
        ref={ref}
        readOnly={!isInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInput={isInput}
      />
      {value !== "" && renderProps}
    </TextContainer>
  );
});

export default Text;
