import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import ImageScreen from './Screens/ImageScreen';
import FavouriteScreen from './Screens/FavouriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Image"
          component={ImageScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Favourite"
          component={FavouriteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
