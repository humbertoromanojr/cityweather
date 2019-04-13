import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class citys extends Component {
  state = {
    climates: [],
  };

  componentWillMount() {
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums') .then(response => console.log(response));
    axios
      .get(
        'http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=S%C3%A3o%20Paulo&state=SP&token=8d27c6bd3dfe53e445730aad3e4cbd02',
      )

      .then(response => this.setState({ climates: response.data }));
  }
  renderClimates() {
    return this.state.climates.map(climate => (
      <View key={climate.id} climate={climate}>
        <Text>{climate.name}</Text>
        <Text>{climate.temperature}</Text>
      </View>
    ));
  }

  render() {
    console.log(this.state);
    return <View>{this.renderClimates()}</View>;
  }
}
