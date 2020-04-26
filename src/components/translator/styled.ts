import styled from "styled-components";

export const Border = styled.div`
  width: 90%;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 300px;

  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 500px;
    border-radius: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }

  overflow: hidden;
  height: 100%;
`;

export const Delete = styled.div`
  height: 24px;
  min-width: 24px;
  background-position: 0 -192px
  background-image: url("https://ssl.gstatic.com/translate/1x_mobile.png");
  cursor: pointer;
`;
