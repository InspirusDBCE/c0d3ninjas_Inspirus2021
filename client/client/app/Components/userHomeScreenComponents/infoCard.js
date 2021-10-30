import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { Fontisto } from '@expo/vector-icons'; 


import AppText from '../../config/AppText';



function InfoCard({userName}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.greeting}>
                    <AppText style={styles.font}>Welcome{"\n"}{userName}</AppText>
                </View>
                <View style={styles.backgroundImage}>
                    <Fontisto name="doctor" size={RFPercentage(10)} color="#1d459c" />
                </View>
            </View>
        </View>
    );
}

export default InfoCard;


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        height:windowHeight/4,
        width:windowWidth,
        overflow:'hidden'
    },
    card:{
        height:windowHeight/4,
        width:windowWidth,
        borderBottomLeftRadius:RFPercentage(5),
        borderBottomRightRadius:RFPercentage(5),
        borderWidth:1,
        backgroundColor:colors.primary,
        overflow:'hidden',
    },
    font:{
        color:colors.white,
        fontSize:RFPercentage(5),
        fontWeight:'bold'
    },
    backgroundImage:{
        marginLeft:windowWidth/1.5,
    },
    greeting:{
        marginTop:windowHeight/20,
        marginLeft:windowWidth/50,
        backgroundColor:colors.primary,
        height:windowHeight/9,
        width:windowWidth/2
    }
})