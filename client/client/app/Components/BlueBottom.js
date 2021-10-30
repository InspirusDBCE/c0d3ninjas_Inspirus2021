import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import colors from '../config/colors';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';
import AppText from '../config/AppText';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function BlueBottom({buttonText, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <AppText style={styles.fontStyle}>{buttonText}</AppText>

        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{

        borderRadius:RFPercentage(2),
        backgroundColor:colors.primary,
        width:windowWidth/3,
        height:windowHeight/20,
        alignItems:'center',
        justifyContent:'center'

    },

    fontStyle:{

        color:colors.white,
        fontSize:RFPercentage(2)
    }

})


export default BlueBottom;