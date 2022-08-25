import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
import {Button, Text, View} from 'react-native';
import Chat from './src/components/Chat';


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
              <View>
                <Button
                  onPress={() => alert('This is a button!')}
                  title="icon"
                  color="#34B7F1"
                />
              </View>
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
