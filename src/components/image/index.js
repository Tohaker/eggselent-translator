import React from "react";
import { ImageContainer, Image } from "./styled";
import eggImage from "assets/egg.jpg";

const HeaderImage = ({ redirectUrl }) => {
  return (
    <ImageContainer>
      <a href={redirectUrl}>
        <Image src={eggImage} alt="A jpegg" />
      </a>
    </ImageContainer>
  );
};

export default HeaderImage;
