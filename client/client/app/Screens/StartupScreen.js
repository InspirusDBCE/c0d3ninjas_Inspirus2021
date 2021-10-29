import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native'
import colors from '../config/colors';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function StartupScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/cropped.jpg')}></Image>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        height:windowHeight,
        width:windowWidth,
        alignItems:'center'
        

    },

    image:{
        marginTop:windowHeight/5,
        height:windowHeight/2,
        width:windowWidth,
        marginRight:windowWidth/80


    }
})


export default StartupScreen;