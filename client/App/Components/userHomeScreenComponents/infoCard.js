import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Fontisto } from '@expo/vector-icons'; 


import AppText from '../../config/AppText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function InfoCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.greeting}>
                    <AppText style={styles.font}>Welcome{"\n"}Yash</AppText>
                </View>

                <View>
                <Fontisto name="doctor" size={24} color="darkblue" />

                </View>

            </View>



        </View>
    );
}

export default InfoCard;


const styles = StyleSheet.create({
    
    container:{
        backgroundColor:colors.white,
        height:windowHeight/3,
        width:windowWidth,
       


    },
    

    card:{
        height:windowHeight/3,
        width:windowWidth,
        borderBottomLeftRadius:RFPercentage(5),
        borderBottomRightRadius:RFPercentage(5),
        borderWidth:1,
        backgroundColor:colors.primary


    },


    font:{
        color:colors.white,
        fontSize:RFPercentage(5),
        fontWeight:'bold'


    },

    greeting:{
        marginTop:windowHeight/20,
        marginLeft:windowWidth/50,
        backgroundColor:colors.primary,
        height:windowHeight/9,
        width:windowWidth/2
        

    }


})