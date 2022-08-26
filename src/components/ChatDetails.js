import React from 'react';
import {FlatList} from 'react-native';
import ChatMessage from './ChatMessage';

const ChatDetails = ({navigation, route}) => {
  /*const isMyMassage = () => {
    return route.params.data.messages.id === 'u1';
  };*/
  return (
    <FlatList
      data={route.params.data.messages}
      renderItem={({item}) => <ChatMessage messages={item} />}
      inverted
    />
  );
};

export default ChatDetails;
