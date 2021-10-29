import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../config/AppText';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function DoctorCard({doctorName}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="doctor" size={RFPercentage(8)} color="grey"/>

            <AppText style={styles.fontName}>Dr. {doctorName}</AppText>

        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        width:windowWidth,
        height:windowHeight/10,
        backgroundColor:colors.white,
        marginTop:windowHeight/40,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.black


    },

    fontName:{
        fontWeight:'bold',
        fontSize:RFPercentage(3),
        color:colors.black
    },

    


})

export default DoctorCard;