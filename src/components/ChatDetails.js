import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatPage = ({route, navigation}) => {
  /*const isMyMassage = () => {
    return route.params.data.messages.id === 'u1';
  };*/
  return (
    <View style={styles.container}>
      {route.params.data.messages.map(m => {
        return (
          <Text style={styles.ballon} key={m.date}>
            {m.text}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ballon: {
    //backgroundColor: isMyMassage() ? '#dcf8c5' : 'white',
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});

export default ChatPage;
