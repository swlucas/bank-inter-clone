import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container, ContainerLogo, ContainerCards, Logo } from "./styles";
import Card from "../../components/Card";
import { bold } from "ansi-colors";

export default function Signin() {
  return (
    <Container>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerCards>
        <Card>
          <View style={{ justifyContent: "center", alignContent: "center", marginTop: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#e7e7f1",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "#f5f5fa" }}>LP</Text>
                </View>
                <View style={{ paddingLeft: 15, width: 150 }}>
                  <Text style={{ color: "#484850", fontSize: 15 }}>Lucas Pereira Santos</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F5F6FA",
                  borderWidth: 1,
                  borderColor: "#eaebef",
                  width: 90,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5
                }}
              >
                <Text>ALTERAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </ContainerCards>
    </Container>
  );
}
