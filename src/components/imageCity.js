import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { connect } from "react-redux";

class ImageCity extends Component {
  render() {
    //console.log(this.state);
    const imgCity = `../img/vila_velha.jpg`;
    return <Text> Cidade: {this.props.propFromReduxSelectedCity}</Text>;
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
)(ImageCity);
