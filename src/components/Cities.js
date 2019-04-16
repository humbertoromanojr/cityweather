import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSelectCity } from "../store/actions/cityAction";

import { View, Text, Picker, Dimensions, StyleSheet } from "react-native";

class Cities extends Component {
  state = {
    selectCity: ""
  };

  render() {
    // console.log(`PROP: ${JSON.stringify(this.props, undefined, 2)}`);
    // console.log(`STATE: ${JSON.stringify(this.state, undefined, 2)}}`);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selecione a cidade</Text>

        <Picker
          selectedValue={this.state.selectCity}
          style={{ height: 50, width: 200 }}
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
    );
  }
}

// const mapStateToProps = state => ({
//   selectCity: state.cityReducer.selectCity
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ actionSelectCity }, dispatch);

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
    fontSize: 26,
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
  }
});