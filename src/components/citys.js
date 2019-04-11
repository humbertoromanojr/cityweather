import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  Button,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";

export default class citys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  clickme = () => {
    Alert.alert(this.state.city);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickme}>
          <Text style={styles.textSelected}>Selecione a cidade</Text>
        </TouchableOpacity>

        <Picker
          selectedValue={this.state.city}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ city: itemValue })
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
  containerSelectCity: {
    flex: 3,
    fontSize: 20,
    backgroundColor: "#ff0"
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
  textSelected: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10
  }
});
