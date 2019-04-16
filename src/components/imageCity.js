import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

import { connect } from "react-redux";

const baseUrl = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/8283/days/15?token=8d27c6bd3dfe53e445730aad3e4cbd02`;

class imageCity extends Component {
  state = {
    climates: []
  };

  componentWillMount() {
    axios
      .get(baseUrl)
      .then(response =>
        this.setState({ climates: [...this.state.climates, response.data] })
      );
  }

  /* renderClimates() {
    const imgCity = `../img/vila_velha.jpg`;
    return this.state.climates.map(climate => (
      <View key={climate.id} climate={climate}>
        <Text>{climate.name}</Text>
        <Image source={require(imgCity)} style={styles.image} />
      </View>
    ));
  } */

  render() {
    //console.log(this.state);
    const imgCity = `../img/vila_velha.jpg`;
    return <Text> ee {this.props.propFromReduxSelectedCity}</Text>;

    // return this.state.climates.map(climate => (
    //   <View key={climate.id} climate={climate}>
    //     {/* <Text>{climate.name}</Text> */}
    //     <Image source={require(imgCity)} style={styles.image} />
    //   </View>
    // ));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

const mapReduxStateToComponentProps = state => ({
  propFromReduxSelectedCity: state.cityReducer.reduxSelectCity
});

export default connect(
  mapReduxStateToComponentProps,
  null
)(imageCity);
