import React from 'react';
import {FlatList, ImageBackground} from 'react-native';
import ChatMessage from './ChatMessage';
import Input from './Input';

const image = require('../../assets/Whatsapp.png');

const ChatDetails = ({navigation, route}) => {
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={image}>
      <FlatList
        data={route.params.data.messages}
        renderItem={({item}) => (
          <ChatMessage key={item.userId} messages={item} />
        )}
        inverted
      />
      <Input />
    </ImageBackground>
  );
};

export default ChatDetails;
