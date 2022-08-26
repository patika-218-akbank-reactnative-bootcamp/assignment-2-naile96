import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import {Button, View} from 'react-native';
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
                  onPress={() => alert('This is a button!')}
                  title="Edit"
                  color="#34B7F1"
                />
              </View>
            ),
            headerRight: props => (
              <Ionicons size={30} name="ellipsis-horizontal-outline" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetails}
          options={({route}) => ({title: route.params.data.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
