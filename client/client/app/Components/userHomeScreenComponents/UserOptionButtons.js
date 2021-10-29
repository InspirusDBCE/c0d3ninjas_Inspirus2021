import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppText from '../../config/AppText';
import colors from '../../config/colors';
import { FontAwesome } from '@expo/vector-icons'; 


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// buttons rendred on the select health services are rendered from this
// props are passsed to this component by the consumer of the component 

function UserOptionButtons({heading, icon, subHeading, iconSize}) {
    return (
        <TouchableOpacity onPress={()=> console.log('h,')}>
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome name={icon} size={iconSize} color={colors.white} />

            </View>

            <View style={styles.textContainer}>
                <View style={styles.mainHeading}>
                    <AppText style={styles.fontStyleHeading}>{heading}</AppText>
                </View>
                <View style={styles.subHeading}>
                    <AppText style={styles.fontStyleSubHeading}>{subHeading}</AppText>

                </View>

            </View>


        </View>
        </TouchableOpacity>
    );
}

export default UserOptionButtons;



const styles = StyleSheet.create({
    
    container:{
        backgroundColor:colors.white,
        width:windowWidth,
        height:windowHeight/8,
        marginTop:windowHeight/80,
        flexDirection:'row',
        alignItems:'center'
    },

    icon:{
        backgroundColor:colors.primary,
        borderColor:colors.primary,
        aspectRatio:1/1,
        width:windowHeight/8,
        borderWidth:1,
        borderRadius:RFPercentage(2),
        marginLeft:windowWidth/50,
        alignItems:'center',
        justifyContent:'center'

    },

    mainHeading:{
        marginLeft:windowHeight/95,
        marginTop:windowHeight/95,



    },

    subHeading:{
        marginLeft:windowHeight/95,
        marginTop:windowHeight/95,
        width:windowWidth/1.5,
        backgroundColor:colors.white,
        height:windowHeight/18


    },

    fontStyleHeading:{
        color:colors.primary,
        fontSize:RFPercentage(3.2),
        fontWeight:'bold'

    },

    fontStyleSubHeading:{
        color:colors.black,
        fontSize:RFPercentage(1.7),
        fontWeight:'bold',
        

    },



    textContainer:{
        height:windowHeight/8,
        width:windowWidth,
        backgroundColor:colors.white


    }


})