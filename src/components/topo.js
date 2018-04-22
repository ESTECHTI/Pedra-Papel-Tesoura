import React, { Component } from "react";
import { View, Image } from "react-native";

const imagem = require("../../imgs/jokenpo.png");

export default class Topo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: "100%" }}
          source={imagem}
        />
      </View>
    );
  }
}

//export default Topo;
