import React from 'react';
import {View, Text, Button} from 'react-native';

const Details = ({route, navigation}) => {
  return (
    <View>
      <Text> Welcome {route.params.name} </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {name: 'ali'})}
      />
    </View>
  );
};

export default Details;
