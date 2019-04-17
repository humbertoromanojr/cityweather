import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSelectCity } from "../store/actions/cityAction";
import { actionUf } from "../store/actions/UfAction";

import { View, Text, Picker, Dimensions, StyleSheet } from "react-native";

class Cities extends Component {
  state = {
    selectCity: "",
    UF: ""
  };

  render() {
    // console.log(`PROP: ${JSON.stringify(this.props, undefined, 2)}`);
    // console.log(`STATE: ${JSON.stringify(this.state, undefined, 2)}}`);
    return (
      <View style={styles.container}>
        <View style={styles.containerCities}>
          <Text style={styles.title}>Selecione a cidade</Text>
          <Picker
            selectedValue={this.state.selectCity}
            style={styles.piker}
            onValueChange={(selectedCity, itemIndex) => {
              this.props.actionSelectCity(selectedCity);
              this.setState({
                selectCity: selectedCity
              });
            }}
          >
            <Picker.Item label="Vila Velha" value="Vila Velha" />
            <Picker.Item label="Serra" value="Serra" />
            <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
            <Picker.Item label="Vitória" value="Vitória" />
            <Picker.Item label="Belo Horizonte" value="Belo Horizonte" />
            <Picker.Item label="Viana" value="Viana" />
            <Picker.Item label="Guarapari" value="Guarapari" />
            <Picker.Item label="São Paulo" value="São Paulo" />
            <Picker.Item label="Cariacica" value="Cariacica" />
          </Picker>
        </View>
        <View style={styles.containerStates}>
          <Text style={styles.title}>Selecione o estado</Text>
          <Picker
            selectedValue={this.state.UF}
            style={styles.piker}
            onValueChange={(selectedUf, itemIndex) => {
              this.props.actionUf(selectedUf);
              this.setState({
                UF: selectedUf
              });
            }}
          >
            <Picker.Item label="ES" value="ES" />
            <Picker.Item label="RJ" value="RJ" />
            <Picker.Item label="SP" value="SP" />
          </Picker>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   selectCity: state.cityReducer.selectCity
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ actionSelectCity, actionUf }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Cities);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#fff"
  },
  containerSelectCity: {
    flex: 3,
    fontSize: 20,
    backgroundColor: "#ff0"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  textSelected: {
    backgroundColor: "#f4f4f4",
    color: "#222",
    padding: 10,
    width: Dimensions.get("window").width / 2
  },
  piker: {
    height: 30,
    width: 200
  }
});
