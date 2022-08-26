import React from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import ChatMessage from './ChatMessage';
import Input from './Input';

const image = require('../../assets/Whatsapp.png');

const ChatDetails = ({navigation, route}) => {
  return (
    <ImageBackground style={styles.image} source={image}>
      <FlatList
        data={route.params.data.messages}
        renderItem={({item}) => (
          <ChatMessage key={item.userId} messages={item} />
        )}
      />
      <Input />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ChatDetails;
