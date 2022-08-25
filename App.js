import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import {Button, View} from 'react-native';
import Users from './src/components/Users';
import ChatDetails from './src/components/ChatDetails';

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
            headerR: props => <LogoTitle {...props} />,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Users" component={Users} />
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
