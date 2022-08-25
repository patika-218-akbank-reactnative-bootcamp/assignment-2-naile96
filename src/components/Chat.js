import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Profile from './Profile';


const Chat = ({data}) => {
  return (
    <View style={styles.header}>
      <View>
        <Profile size={80} url={data.profile.avatarUrl} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textName}>{data.profile.name}</Text>
        <Text style={styles.message}>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20,

    marginTop: 20,
  },

  message: {
    color: 'gray',

    marginBottom: 20,
  },
  textArea: {
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderTopWidth: 0.5,
    flex: 1,
  },
});

export default Chat;
