import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import UserHomePageScreen from './app/Screens/userHomePageScreen';
import Screen from './app/Components/Screen';
import AppText from './app/config/AppText';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AppointmentBookingScreen from './app/Screens/appointmentBookingScreen';
import HomeNavigator from './app/Navigation/HomeNavigator';



export default function App() {
  return (
      <Screen>
        <NavigationContainer>

            <HomeNavigator/>

        </NavigationContainer>

      </Screen>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
