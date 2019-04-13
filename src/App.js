import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Citys from "./components/citys";
import Climates from "./components/temperature";

export default class App extends Component {
  state = { city: "" };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerSelectCity}>
            <Citys />
          </View>

          <View style={styles.containerCity}>
            <View style={styles.image}>
              <Text style={styles.titleImage}>Image City</Text>
            </View>
          </View>
          <View style={styles.containerTemperature}>
            <Text>Temperature</Text>
            <Climates />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    width: Dimensions.get("window").width,
    textAlign: "center",
    padding: 10
  },
  containerSelectCity: {
    flex: 3,
    fontSize: 20,
    backgroundColor: "#666"
  },
  title: {
    fontSize: 16,
    color: "#222"
  },
  containerCity: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "#ddd"
  },
  image: {
    width: 40,
    height: 40
  },
  titleImage: {
    fontSize: 14
  },
  containerTemperature: {
    flex: 3,
    backgroundColor: "#999"
  }
});
