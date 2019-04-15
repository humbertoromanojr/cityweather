import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const baseUrl = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=8d27c6bd3dfe53e445730aad3e4cbd02`;

export default class citys extends Component {
  state = {
    climates: []
  };

  componentWillMount() {
    axios
      .get(baseUrl) //this.setState({ climates: [ ...this.state.climates, response.data ] })
      .then(response =>
        this.setState({ climates: [...this.state.climates, response.data] })
      );
  }
  renderClimates() {
    return this.state.climates.map(climate => (
      <View key={climate.id} climate={climate}>
        <Text style={styles.clima}>
          {climate.name} - {climate.state} - {climate.country}
        </Text>
        <Text style={styles.clima}>{climate.data[0].date_br}</Text>
        <Text style={styles.clima}>
          Temperatuda min e max ao Alvorecer:{" "}
          {climate.data[0].temperature.dawn.min} -{" "}
          {climate.data[0].temperature.dawn.max}
        </Text>
        <Text style={styles.clima}>
          Temperatuda min e max de Manhã:{" "}
          {climate.data[0].temperature.morning.min} -{" "}
          {climate.data[0].temperature.morning.max}
        </Text>
        <Text style={styles.clima}>
          Temperatuda min e max a Tarde:{" "}
          {climate.data[0].temperature.afternoon.min} -{" "}
          {climate.data[0].temperature.afternoon.max}
        </Text>
        <Text style={styles.clima}>
          Temperatuda min e max a Noite: {climate.data[0].temperature.night.min}{" "}
          - {climate.data[0].temperature.night.max}
        </Text>
      </View>
    ));
  }

  render() {
    console.log(this.state);
    return <View style={styles.container}>{this.renderClimates()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#333"
  },
  clima: {
    color: "#fff"
  }
});
