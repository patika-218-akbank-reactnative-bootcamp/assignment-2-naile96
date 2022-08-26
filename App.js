import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import {Alert, Button, View} from 'react-native';
import User from './src/components/User';
import ChatDetails from './src/components/ChatDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {height: 120},
            title: '',
            headerLeft: props => (
              <View>
                <Button
                  onPress={() => Alert.alert('Simple Button pressed')}
                  title="Edit"
                  color="#0070FF"
                />
              </View>
            ),
            headerRight: props => (
              <Ionicons size={30} color="#0070FF" name="create-outline" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetails}
          options={({route}) => ({
            title: route.params.data.name,
            headerTitleAlign: 'left',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
