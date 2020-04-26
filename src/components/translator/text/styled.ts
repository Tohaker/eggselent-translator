import styled from "styled-components";

export const TextContainer = styled.div<{ hasBorder: boolean }>`
  border-style: ${({ hasBorder }) => {
    return hasBorder ? "hidden solid hidden hidden" : "hidden";
  }};

  @media only screen and (max-width: 450px) {
    border-style: ${({ hasBorder }) => {
      return hasBorder ? "hidden hidden solid hidden" : "hidden";
    }};
  }

  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 100%;
  padding: 12px;

  display: flex;
`;

export const TextBox = styled.textarea<{ isInput: boolean }>`
  border-width: 0;
  resize: none;
  width: calc(100% - 24px);

  @media only screen and (max-width: 450px) {
    width: calc(95% - 24px);
  }

  height: 100%;
  font-family: "Roboto", arial, sans-serif;
  font-size: 24px;
`;
