import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCity } from "../store/actions/cityAction";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

class imageCity extends Component {
  state = {
    selectCity: ""
  };

  render() {
    console.log(this.state);
    const imgCity = `../img/vila_velha.jpg`;

    return (
      <View style={styles.container}>
        <Text>{this.state.selectCity}</Text>
        <Image source={require(imgCity)} style={styles.image} />
      </View>
    );
  }
}

const mapStateToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  null
)(imageCity);

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
