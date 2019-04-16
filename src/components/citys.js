import React, { Component } from "react";

import { connect } from "react-redux";
import { selectCity } from "../store/actions/cityAction";

import { View, Text, Picker, Dimensions, StyleSheet } from "react-native";

class citys extends Component {
  state = {
    selectCity: ""
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selecione a cidade</Text>

        <Picker
          selectedValue={this.state.selectCity}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectCity: itemValue })
          }
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
        <View>
          <Text>Cidade atual:</Text>
          <View style={styles.textSelected}>
            <Text>{this.state.selectCity}</Text>
            <Text>{this.props.selectCity}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectCity: state.cityReducer.selectCity
});

export default connect(
  mapStateToProps,
  null
)(citys);

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
