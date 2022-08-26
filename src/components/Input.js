import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = () => {
  return (
    <TouchableOpacity>
      <View style={styles.boxContainer}>
        <Ionicons style={styles.icons} name="add-outline" />
        <View style={styles.box}>
          <TextInput style={styles.textinput} />
          <Ionicons style={styles.boxicons} name="albums-outline" />
        </View>
        <Ionicons style={styles.icons} name="camera-outline" />
        <Ionicons style={styles.icons} name="mic-outline" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#ECEEF1',
  },
  box: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  textinput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    color: '#0070FF',
    padding: 8,
    fontSize: 25,
  },
  boxicons: {
    margin: 9,
    color: '#0070FF',
    fontSize: 25,
  },
});

export default Input;
