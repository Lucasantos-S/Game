import { Home } from './src/screens/Home';
import { Game } from './src/screens/Game';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export type RootStacksParams = {
  Home: undefined;
  Game: undefined;
};

function App(): JSX.Element {
  const Stack = createStackNavigator<RootStacksParams>();

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#000'}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
           
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
export default App;
