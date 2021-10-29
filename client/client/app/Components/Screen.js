// This file is used to ensure that top padding is applied to seprate child components from notch/notifs etc, 
// the background color is also defined so we dont have to keep adding background colors for every screen manually


import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import colors from '../config/colors';


import {SafeAreaView} from 'react-native-safe-area-context'




function Screen({children}) {


    return (

        <SafeAreaView style={styles.Screen}>

            {children}

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    Screen:{
        // paddingTop: Constants.statusBarHeight,       // seems to be uncessasry idk
        flex:1, 
        backgroundColor: colors.white
    },
})


export default Screen;