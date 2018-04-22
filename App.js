import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Topo from "./src/components/topo";
import Icone from "./src/components/icone";

export default class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhahUsuario: "",
      escolhaComputador: "",
      resultado: ""
    };
  }

  jokenpo(escolhahUsuario) {
    //gera número aleatório ( 0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = "";

    switch (numAleatorio) {
      case 0:
        escolhaComputador = "pedra";
        break;
      case 1:
        escolhaComputador = "papel";
        break;
      case 2:
        escolhaComputador = "tesoura";
        break;
      default: escolhaComputador = "";
    }

    let resultado = "";

    if (escolhaComputador === "pedra") {
      if (escolhahUsuario === "pedra") {
        resultado = "Empate";
      }

      if (escolhahUsuario === "papel") {
        resultado = "Você ganhou";
      }

      if (escolhahUsuario === "tesoura") {
        resultado = "Você perdeu";
      }
    }

    if (escolhaComputador === "papel") {
      if (escolhahUsuario === "papel") {
        resultado = "Empate";
      }

      if (escolhahUsuario === "tesoura") {
        resultado = "Você ganhou";
      }

      if (escolhahUsuario === "pedra") {
        resultado = "Você perdeu";
      }
    }

    if (escolhaComputador === "tesoura") {
      if (escolhahUsuario === "tesoura") {
        resultado = "Empate";
      }

      if (escolhahUsuario === "pedra") {
        resultado = "Você ganhou";
      }

      if (escolhahUsuario === "papel") {
        resultado = "Você perdeu";
      }
    }
    this.setState({
      escolhahUsuario,
      escolhaComputador,
      resultado
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => {
                this.jokenpo("pedra");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => {
                this.jokenpo("papel");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => {
                this.jokenpo("tesoura");
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />

          <Icone escolha={this.state.escolhahUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  palco: {
    alignItems: "center",
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60
  }
});
