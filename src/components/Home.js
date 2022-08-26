import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {ChatList} from './Data';
import User from './User';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.view}>
      <Text style={styles.text}>Chats</Text>
      <View style={styles.container}>
        <Button
          title="Broadast List"
          color="#0070FF"
          onPress={() => navigation.navigate('Details', {name: 'ali'})}
        />
        <Button
          title="New Group"
          color="#0070FF"
          onPress={() => navigation.navigate('Details', {name: 'ali'})}
        />
      </View>

      <FlatList
        data={ChatList}
        renderItem={({item}) => <User data={item} navigation={navigation} />}
      />
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
