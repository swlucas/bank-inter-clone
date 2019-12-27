import React from "react";
import {
  Container,
  BackgroundTop,
  BackgroundBotton,
  Logo,
  ContainerCards,
  ContainerLogin,
  ContainerLoginTop,
  AccountInfo,
  ButtonChange,
  ContainerLoginBotton,
  ButtonEnter,
  Text,
  Avatar,
  ContainerAccountInfo,
  ContainerIsafe,
  ContainerIcon,
  ContainerIsafeLeft,
  Shield,
  Lock,
  ContainerIsafeRight,
  RoundedBackground,
  MoreIcon,
  ContainerInterPag,
  ContainerInterPagLeft,
  ContainerInterpagRight,
  ScannerIcon,
  AttachMoney,
  QrCodeIcon,
  ContainerIconText,
  LogoInterPag
} from "./styles";
import Card from "../../components/Card";

export default function Signin() {
  return (
    <Container>
      <BackgroundTop>
        <Logo />
      </BackgroundTop>
      <BackgroundBotton>
        <ContainerCards>
          <Card>
            <ContainerLogin>
              <ContainerLoginTop>
                <AccountInfo>
                  <Avatar>
                    <Text style={{ color: "#fff" }}>LP</Text>
                  </Avatar>
                  <ContainerAccountInfo>
                    <Text style={{ color: "#4D4D59", fontSize: 15 }}>LUCAS PEREIRA SANTOS</Text>
                    <Text style={{ color: "#898C9D" }}>1733512-4</Text>
                  </ContainerAccountInfo>
                </AccountInfo>
                <ButtonChange>
                  <Text style={{ color: "#4D4D59", fontWeight: "bold" }}>ALTERAR</Text>
                </ButtonChange>
              </ContainerLoginTop>
              <ContainerLoginBotton>
                <ButtonEnter>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>ENTRAR</Text>
                </ButtonEnter>
              </ContainerLoginBotton>
            </ContainerLogin>
          </Card>
          <Card>
            <ContainerIsafe>
              <ContainerIsafeLeft>
                <ContainerIcon>
                  <Shield />
                  <Lock />
                </ContainerIcon>
                <Text style={{ color: "#6d6f7b", fontSize: 20 }}>i-Safe</Text>
              </ContainerIsafeLeft>
              <ContainerIsafeRight>
                <RoundedBackground>
                  <MoreIcon />
                </RoundedBackground>
                <Text>Gerar</Text>
              </ContainerIsafeRight>
            </ContainerIsafe>
          </Card>
          <Card>
            <ContainerInterPag>
              <ContainerInterPagLeft>
                <LogoInterPag />
              </ContainerInterPagLeft>
              <ContainerInterpagRight>
                <ContainerIconText>
                  <RoundedBackground>
                    <ContainerIcon>
                      <ScannerIcon />
                      <AttachMoney />
                    </ContainerIcon>
                  </RoundedBackground>
                  <Text>Pagar</Text>
                </ContainerIconText>
                <ContainerIconText>
                  <RoundedBackground>
                    <ContainerIcon>
                      <ScannerIcon />
                      <QrCodeIcon />
                    </ContainerIcon>
                  </RoundedBackground>
                  <Text>Receber</Text>
                </ContainerIconText>
              </ContainerInterpagRight>
            </ContainerInterPag>
          </Card>
        </ContainerCards>
      </BackgroundBotton>
    </Container>
  );
}
