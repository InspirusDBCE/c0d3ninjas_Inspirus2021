import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserHomePageScreen from '../client/App/Screens/userHomePageScreen';

import Screen from './App/Components/Screen';
import AppText from './App/config/AppText';

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
