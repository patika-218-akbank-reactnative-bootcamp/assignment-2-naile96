import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Profile = ({url, size = 77}) => {
  return (
    <View style={[styles.view, {width: size, height: size}]}>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
    borderRadius: 50,
  },
  image: {
    height: '100%',
    wıdth: '100%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
});

export default Profile;