import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  Button,
  Dimensions,
  StyleSheet
} from "react-native";
import axios from "axios";

export default class citys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      citys: []
    };
  }

  componentWillMount() {
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums') .then(response => console.log(response));
    axios
      .get(
        "http://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/microrregioes"
      )

      .then(response => this.setState({ citys: response.data }));
  }
  renderCitys() {
    return this.state.citys.map(city => (
      <View key={city.id} city={city}>
        <Text>{city.nome}</Text>
      </View>
    ));
  }

  clickme = () => {
    Alert.alert(this.state.city);
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.city}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ city: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
        </Picker>
        {this.renderCitys()}
        <Button title="Click Me" onPress={this.clickme} />
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
  }
});
