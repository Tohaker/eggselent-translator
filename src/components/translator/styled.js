import styled from "styled-components";

export const InputTitle = styled.p``;

export const OutputTitle = styled.p`
  line-height: auto;
`;

export const InputText = styled.textarea``;

export const OutputText = styled.textarea``;

export const TranslateButton = styled.button`
  margin-top: 12px;
  padding: 12px;
  border-radius: 12px;
`;

export const Container = styled.div`
  margin: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  border-style: solid;
  border-width: 1px;

  @media only screen and (min-width: 440px) {
    width: 40%;
  }
`;

export const CopyContainer = styled.div`
  display: flex;
`;

export const Separator = styled.div`
  width: 100%;
`;
