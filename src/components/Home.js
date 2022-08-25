import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {Messages} from './Data';
import Chat from './Chat';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.view}>
      <Text style={styles.text}>Chats</Text>
      <View style={styles.container}>
        <Button
          title="Broadast List"
          color="#34B7F1"
          onPress={() => navigation.navigate('Details', {name: 'ali'})}
        />
        <Button
          title="New Group"
          color="#34B7F1"
          onPress={() => navigation.navigate('Details', {name: 'ali'})}
        />
      </View>

      <Chat data={Messages[0]} />
      <Chat data={Messages[1]} />
      <Chat data={Messages[2]} />
      <Chat data={Messages[3]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffff',
  },
  text: {
    margin: 17,
    fontWeight: 'bold',
    fontSize: 35,
  },
  container: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default Home;
