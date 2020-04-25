import React from "react";
import styled from "styled-components";
import Text from "components/translator/text";

const Border = styled.div`
  width: 90%;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 720px) {
    width: 100%;
    border-radius: 0;
  }

  height: 300px;
`;

const Frame: React.FC = (props) => {
  return (
    <Border>
      <Text isInput={true} />
      <Text />
    </Border>
  );
};

export default Frame;
