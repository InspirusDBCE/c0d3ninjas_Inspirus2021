import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { FontAwesome5 } from '@expo/vector-icons'; 


import AppText from '../../config/AppText';



function BlueCard({userName}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.greeting}>
                    <AppText style={styles.font}>Please Select A {"\n"}Department</AppText>
                </View>

                <View style={styles.backgroundImage}>
                <FontAwesome5 name="hospital-user" size={RFPercentage(14)} color="#1d459c" />

                </View>

            </View>



        </View>
    );
}

export default BlueCard;


const styles = StyleSheet.create({
    
    container:{
        backgroundColor:colors.white,
        height:windowHeight/3.8,
        width:windowWidth,
        overflow:'hidden'


    },
    

    card:{
        height:windowHeight/3.8,
        width:windowWidth,
        borderBottomLeftRadius:RFPercentage(5),
        borderBottomRightRadius:RFPercentage(5),
        borderWidth:1,
        backgroundColor:colors.primary,
        overflow:'hidden',
        flexDirection:"row"


    },


    font:{
        color:colors.white,
        fontSize:RFPercentage(3.5),
        fontWeight:'bold'


    },

    backgroundImage:{
        marginTop:windowHeight/8,
    
    },

    greeting:{
        marginTop:windowHeight/20,
        marginLeft:windowWidth/50,
        backgroundColor:colors.primary,
        height:windowHeight/9,
        width:windowWidth/1.5,
        

    }


})