import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Profile from './Profile';

const User = ({data, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => {
        navigation.navigate('ChatDetails', {data: data});
      }}>
      <View>
        <Profile size={80} url={data.avatarUrl} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textName}>{data.name}</Text>
        <Text style={styles.message}>{data.lastMessage}</Text>
      </View>
    </TouchableOpacity>
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
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
  },
});

export default User;
