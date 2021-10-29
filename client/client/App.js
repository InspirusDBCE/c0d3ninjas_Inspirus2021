import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import UserHomePageScreen from './app/Screens/userHomePageScreen';
import Screen from './app/Components/Screen';
import AppText from './app/config/AppText';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()
const StackNavigator = () => (

    <Stack.Navigator
      screenOptions={{
      headerShown: false
    }}>

        <Stack.Screen name="HomeScreen" component={UserHomePageScreen}/>


    </Stack.Navigator>



)


export default function App() {
  return (
      <Screen>
        <NavigationContainer>
          
            <StackNavigator/>

        </NavigationContainer>

      </Screen>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
