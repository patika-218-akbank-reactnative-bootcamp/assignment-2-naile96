import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatMessage = ({messages}) => {
  const isMyMassage = () => {
    return messages.userId === 'u1';
  };

  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    ballon: {
      backgroundColor: isMyMassage() ? '#dcf8c5' : 'white',
      marginRight: isMyMassage() ?  0 : 50,
      marginLeft: isMyMassage() ?  50 : 0,
      borderRadius: 5,
      padding: 10,
      margin: 5,
    },
  });

  return (
    <Text style={styles.ballon} key={messages.date}>
      {messages.text}
    </Text>
  );
};

export default ChatMessage;
