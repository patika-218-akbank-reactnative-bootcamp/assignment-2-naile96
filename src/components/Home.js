import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {ChatList} from './Data';
import Users from './Users';

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
      <Users data={ChatList[0]} navigation={navigation} />
      <Users data={ChatList[1]} navigation={navigation} />
      <Users data={ChatList[2]} navigation={navigation} />
      <Users data={ChatList[3]} navigation={navigation} />
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
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
});

export default Home;
