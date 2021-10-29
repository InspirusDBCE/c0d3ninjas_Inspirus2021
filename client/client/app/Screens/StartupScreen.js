import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native'
import colors from '../config/colors';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BlueBottom from '../Components/BlueBottom';

import { useNavigation } from '@react-navigation/native';

 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function StartupScreen(props) {

    const navigation = useNavigation();  // navigation prop wasnt being passed like idk why so had to use navigation hook


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/cropped.jpg')}></Image>
            <BlueBottom buttonText="Staff Login"></BlueBottom>
            <View style={{height:30}}></View>
            <BlueBottom buttonText="User Login" onPress={() => navigation.navigate('HomeScreen')}></BlueBottom>

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        height:windowHeight,
        width:windowWidth,
        alignItems:'center',
        marginTop:15
        

    },

    image:{
        marginTop:windowHeight/5,
        height:windowHeight/2,
        width:windowWidth,
        marginRight:windowWidth/80


    }
})


export default StartupScreen;