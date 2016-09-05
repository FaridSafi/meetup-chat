import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Layout from '../libs/Layout';
import {Actions} from 'react-native-router-flux';

export default class Channels extends React.Component {
  renderRow(channelName) {
    return (
      <TouchableOpacity
        style={{
          marginTop: 15,
        }}
        onPress={() => {
          Actions.chat({
            title: '#'+channelName.toUpperCase(),
            channelName: channelName,
          });
        }}
      >
        <Text style={Layout.channelName}>
          # {channelName}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <ScrollView style={Layout.channelsContainer}>
        {this.renderRow('react')}
        {this.renderRow('react-native')}
      </ScrollView>
    );
  }
}