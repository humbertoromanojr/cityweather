import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Cities from "./components/Cities";
import Temperature from "./components/Temperature";
import ImageCity from "./components/ImageCity";
import SearchCity from "./components/SearchCity";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerSelectCity}>
            <Cities />
          </View>

          <View style={styles.containerImageCity}>
            <ImageCity />
            <SearchCity />
          </View>

          <View style={styles.containerTemperature}>
            <Text style={styles.temperatureTitle}>Temperature</Text>
            <Temperature />
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
  containerImageCity: {
    flex: 3,
    backgroundColor: "#fff"
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
    backgroundColor: "#ddd"
  },
  temperatureTitle: {
    backgroundColor: "#fff",
    fontSize: 22,
    color: "#333",
    paddingLeft: 5
  }
});
