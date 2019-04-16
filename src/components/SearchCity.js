import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

const baseUrl = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=Balneário%20Camboriú&state=SC&token=8d27c6bd3dfe53e445730aad3e4cbd02`;

class Searchcity extends Component {
  state = {
    cities: []
  };

  componentWillMount() {
    axios
      .get(baseUrl)
      .then(response => this.setState({ cities: response.data }));
  }

  render() {
    return this.state.cities.map(city => (
      <View key={city.id} city={city}>
        <Text style={styles.clima}>
          {city.id} - {city.name}
        </Text>
        <Text> Cidade: {this.props.propFromReduxSelectedCity}</Text>
      </View>
    ));
  }
}

const mapReduxStateToComponentProps = state => ({
  propFromReduxSelectedCity: state.cityReducer.reduxSelectCity
});

export default connect(
  mapReduxStateToComponentProps,
  null
)(Searchcity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#fff"
  },
  clima: {
    color: "#333"
  }
});
