import styled from "styled-components/native";

import logo from "../../images/logo.png";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerLogo = styled.View`
  flex: 49;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(208.07deg,#ff8700,#ff500f); */
  background-color: #f16704;
`;

export const ContainerCards = styled.View`
  flex: 61;
  align-items: center;

  background-color: #ffffff;
`;

export const Logo = styled.Image.attrs({
  source: logo
})`
  width: 100;
  height: 100;
`;
