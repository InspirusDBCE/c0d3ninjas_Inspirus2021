import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import UserHomePageScreen from './app/Screens/userHomePageScreen';
import Screen from './app/Components/Screen';
import AppText from './app/config/AppText';




export default function App() {
  return (
      <Screen>
          <UserHomePageScreen/>
      </Screen>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
