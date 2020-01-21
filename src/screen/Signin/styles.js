import styled from "styled-components/native";

import logo from "../../images/logo.png";
import logoInterPag from "../../images/logointerpag.png";

import { Feather, MaterialCommunityIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const Text = styled.Text``;

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(208.07deg,#ff8700,#ff500f); */
  background-color: #f16704;
`;

export const BackgroundBotton = styled.View`
  
  align-items: center;

  background-color: #ffffff;
`;

export const Logo = styled.Image.attrs({
  source: logo
})`
  width: 110;
  height: 40;
`;
export const LogoInterPag = styled.Image.attrs({
  source: logoInterPag
})`
  width: 160;
  height: 50;
`;

export const ContainerCards = styled.View`
  top: -20;
`;
export const ContainerLogin = styled.View`
  justify-content: space-around;
`;
export const ContainerLoginTop = styled.View`
  min-height: 100;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AccountInfo = styled.View`
  width: 60%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: #e7e7f1;

  justify-content: center;
  align-items: center;
`;

export const ContainerAccountInfo = styled.View`
  width: 70%;
`;

export const ButtonChange = styled.TouchableOpacity`
  width: 90;
  height: 30;
  justify-content: center;
  align-items: center;
  border-radius: 5;
  border-color: #eaebef;
  border-width: 1;
`;

export const ContainerLoginBotton = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonEnter = styled.TouchableOpacity`
  width: 60%;
  height: 50;
  border-radius: 5;
  background-color: #f16704;

  justify-content: center;
  align-items: center;
  margin-bottom: 20;
`;

export const ContainerIsafe = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Shield = styled(MaterialCommunityIcons).attrs({
  name: "shield-outline",
  size: 50,
  color: "#6d6f7b"
})``;
export const Lock = styled(Feather).attrs({
  name: "lock",
  size: 20,
  color: "#6d6f7b"
})`
  position: absolute;
`;

export const ContainerIsafeLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerIsafeRight = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const RoundedBackground = styled.View`
  background-color: #ffffff;
  width: 45;
  height: 45;
  border-radius: 25;
  justify-content: center;
  align-items: center;
  margin-bottom: 10;
`;

export const MoreIcon = styled(Feather).attrs({
  name: "more-horizontal",
  color: "#f16704",
  size: 30
})``;

export const ContainerInterPag = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
export const ContainerInterPagLeft = styled.View`
  flex: 60;
`;
export const ContainerInterpagRight = styled.View`
  justify-content: space-around;
  flex: 40;
  flex-direction: row;
`;

export const ScannerIcon = styled(Ionicons).attrs({
  name: "ios-qr-scanner",
  color: "#f16704",
  size: 30
})``;

export const AttachMoney = styled(MaterialIcons).attrs({
  name: "attach-money",
  color: "#f16704",
  size: 15
})`
  position: absolute;
`;

export const QrCodeIcon = styled(MaterialCommunityIcons).attrs({
  name: "qrcode",
  color: "#f16704",
  size: 20
})`
  position: absolute;
`;

export const ContainerIconText = styled.View``;
