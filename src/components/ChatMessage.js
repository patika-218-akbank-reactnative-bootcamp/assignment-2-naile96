import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ChatMessage = ({messages}) => {
  const isMyMassage = () => {
    return messages.userId === 'u1';
  };

  const styles = StyleSheet.create({
    name: {
      color: '#075E54',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      fontSize: 15,
    },
    ballon: {
      backgroundColor: isMyMassage() ? '#dcf8c5' : 'white',
      marginRight: isMyMassage() ? 5 : 55,
      marginLeft: isMyMassage() ? 55 : 5,
      borderRadius: 15,
      padding: 10,
      margin: 5,
    },
    date: {
      alignSelf: 'flex-end',
      color: 'gray',
    },
  });

  return (
    <View style={styles.ballon}>
      <Text style={styles.name}>{messages.userName}</Text>
      <Text style={styles.text}>{messages.text}</Text>
      <Text style={styles.date} key={messages.date}>
        {messages.date}
      </Text>
    </View>
  );
};

export default ChatMessage;
