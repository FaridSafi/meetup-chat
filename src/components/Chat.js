import React from 'react';
import {
  View,
} from 'react-native';

import Backend from '../libs/Backend';
import { GiftedChat } from 'react-native-gifted-chat';
import Layout from '../libs/Layout';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {
    Backend.loadMessages(this.props.channelName, (messages) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, messages),
        };
      });
    })
  }
  render() {
    return (
      <View style={Layout.chatContainer}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => {
            Backend.sendMessages(messages);
          }}
          user={{
            _id: Backend.getUid(),
            name: Backend.getName(),
            avatar: Backend.getAvatar(),
          }}
        />
      </View>
    );
  }
}