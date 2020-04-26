import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  justify-content: center;

  border-style: hidden hidden solid hidden;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  height: 40px;
`;

export const Language = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;

  font-family: "Roboto", arial, sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

export const Swapper = styled.div`
  margin: auto 0px;
  min-width: 24px;
  min-height: 24px;
  background-position: 0 -48px;
  background-image: url("https://ssl.gstatic.com/translate/1x_mobile.png");
  cursor: pointer;
`;
