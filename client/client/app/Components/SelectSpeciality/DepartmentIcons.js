import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/colors';
import { AntDesign } from '@expo/vector-icons'; 
import AppText from '../../config/AppText';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function DepartmentIcons({iconComponent, specialityName, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {iconComponent }  
                    <AppText style={styles.fontStyle}>{specialityName}</AppText>
            </View>


        </View>
        </TouchableOpacity>
    );
}

export default DepartmentIcons;


const styles = StyleSheet.create({
    container:{
        marginTop:windowHeight/18,
        width:windowWidth/3,
        height:windowWidth/3,
        backgroundColor:colors.white,
        borderColor:colors.white,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
        

    },

    fontStyle:{
        fontSize:RFPercentage(1.7),
        fontWeight:'bold',
        

    },


    innerContainer:{
        backgroundColor:colors.white,
        width:windowWidth/4,
        height:windowWidth/4,
        justifyContent:'center',
        alignItems:'center'
    }
    

})